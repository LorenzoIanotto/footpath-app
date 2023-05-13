## Libraries

-   Expo
-   react-native-navigation: https://reactnavigation.org/docs/getting-started
-   react-native-paper: https://callstack.github.io/react-native-paper/index.html

## Directory structure

-   App.tsx -> Entry-point (non modificare)
-   src/App.tsx -> Root app
-   src/screens -> Schermate app (suddivise per ambito)
-   src/components -> Componenti schermate (una subdir per schermata + componenti generiche)
-   src/contexts -> Contesti React
-   src/hooks -> Custom hooks
-   src/navigation -> Navigazione
    -   src/navigation/\*Stack -> Stack navigazione
    -   src/navigation/RootNavigation -> Indice navigazione
-   src/adapters -> Interfacce API
-   src/types -> Common data structures (suddivisi per ambito)

## Try it

-   [Install expo cli](https://docs.expo.dev/get-started/installation/)
-   Run it with `npx expo start`
