# Automatyczne publikowanie na NPM przez GitHub Actions

Ten dokument opisuje jak skonfigurować automatyczne publikowanie biblioteki na NPM przy użyciu GitHub Actions.

## Wymagania wstępne

1. Konto na [npmjs.com](https://www.npmjs.com/)
2. Repozytorium na GitHub
3. Uprawnienia do zarządzania repozytorium

## Krok 1: Konfiguracja NPM Token

### 1.1 Generowanie NPM Access Token

1. Zaloguj się na [npmjs.com](https://www.npmjs.com/)
2. Kliknij na swój avatar w prawym górnym rogu
3. Wybierz "Access Tokens"
4. Kliknij "Generate New Token"
5. Wybierz "Automation" (dla CI/CD)
6. Skopiuj wygenerowany token

### 1.2 Dodawanie tokenu do GitHub Secrets

1. Idź do swojego repozytorium na GitHub
2. Kliknij "Settings" → "Secrets and variables" → "Actions"
3. Kliknij "New repository secret"
4. Nazwa: `NPM_TOKEN`
5. Wartość: wklej skopiowany token NPM
6. Kliknij "Add secret"

## Krok 2: Konfiguracja package.json

Upewnij się, że `package.json` zawiera:

```json
{
  "name": "json-schema-creator",
  "version": "1.0.0",
  "description": "TypeScript library for dynamically creating JSON Schema compatible with AJV",
  "main": "dist/index.js",
  "types": "dist/index.d.ts",
  "files": [
    "/dist"
  ],
  "scripts": {
    "build": "tsc",
    "test": "jest",
    "prepublishOnly": "npm run build",
    "preversion": "npm run lint && npm test",
    "version": "npm run build",
    "postversion": "git push && git push --tags"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/TWOJA_NAZWA_UZYTKOWNIKA/json-schema-creator.git"
  },
  "keywords": [
    "json",
    "schema",
    "creator",
    "ajv",
    "validation",
    "typescript"
  ],
  "author": "Twoje Imię",
  "license": "MIT"
}
```

## Krok 3: Workflow GitHub Actions

Pliki workflow zostały już utworzone:
- `.github/workflows/ci.yml` - testowanie na każdy push/PR
- `.github/workflows/publish.yml` - publikowanie na NPM przy tagach

## Krok 4: Proces publikowania

### Automatyczne publikowanie przez tagi

1. **Zaktualizuj wersję:**
   ```bash
   npm version patch  # dla poprawek (1.0.0 → 1.0.1)
   npm version minor  # dla nowych funkcji (1.0.0 → 1.1.0)
   npm version major  # dla breaking changes (1.0.0 → 2.0.0)
   ```

2. **Push z tagami:**
   ```bash
   git push origin main --tags
   ```

3. **GitHub Actions automatycznie:**
   - Uruchomi testy
   - Zbuduje projekt
   - Opublikuje na NPM

### Ręczne publikowanie przez GitHub Release

1. Idź do repozytorium na GitHub
2. Kliknij "Releases" → "Create a new release"
3. Wybierz tag (np. `v1.0.0`)
4. Wypełnij tytuł i opis
5. Kliknij "Publish release"
6. GitHub Actions automatycznie opublikuje na NPM

## Krok 5: Weryfikacja

### Sprawdzenie statusu workflow

1. Idź do "Actions" w repozytorium GitHub
2. Sprawdź status ostatnich uruchomień
3. W przypadku błędów, sprawdź logi

### Sprawdzenie publikacji na NPM

1. Idź na [npmjs.com/package/json-schema-creator](https://www.npmjs.com/package/json-schema-creator)
2. Sprawdź czy nowa wersja jest dostępna
3. Przetestuj instalację: `npm install json-schema-creator`

## Krok 6: Najlepsze praktyki

### Semantic Versioning

- **PATCH** (1.0.1): Poprawki błędów, bez zmian API
- **MINOR** (1.1.0): Nowe funkcje, zachowana kompatybilność wsteczna
- **MAJOR** (2.0.0): Breaking changes, niezgodność z poprzednią wersją

### Przed publikowaniem

1. **Uruchom testy lokalnie:**
   ```bash
   npm test
   npm run build
   ```

2. **Sprawdź co zostanie opublikowane:**
   ```bash
   npm pack --dry-run
   ```

3. **Zaktualizuj CHANGELOG.md**

4. **Sprawdź README.md**

### Workflow rozwoju

1. Pracuj na branchu `develop` lub feature branch
2. Utwórz Pull Request do `main`
3. Po merge do `main`, utwórz tag dla nowej wersji
4. GitHub Actions automatycznie opublikuje

## Rozwiązywanie problemów

### Błąd "Package already exists"

- Sprawdź czy nazwa pakietu jest unikalna na NPM
- Zmień nazwę w `package.json` jeśli potrzeba

### Błąd "Invalid token"

- Sprawdź czy NPM_TOKEN w GitHub Secrets jest poprawny
- Wygeneruj nowy token jeśli potrzeba

### Błąd "Tests failed"

- Napraw testy przed publikowaniem
- Workflow nie opublikuje jeśli testy nie przejdą

### Błąd "Build failed"

- Sprawdź błędy TypeScript
- Upewnij się że wszystkie zależności są zainstalowane

## Przykładowe komendy

```bash
# Lokalne testowanie przed publikowaniem
npm run test
npm run build
npm pack --dry-run

# Publikowanie nowej wersji patch
npm version patch
git push origin main --tags

# Publikowanie nowej wersji minor
npm version minor
git push origin main --tags

# Sprawdzenie statusu publikacji
npm view json-schema-creator versions --json
```

## Bezpieczeństwo

- **Nigdy nie commituj** NPM tokenów do repozytorium
- Używaj tylko GitHub Secrets do przechowywania tokenów
- Regularnie odnawiaj NPM tokeny
- Ogranicz uprawnienia tokenów do minimum potrzebnego 