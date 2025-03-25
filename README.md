# ExpensesApp 💰

[![Licença](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![React Native](https://img.shields.io/badge/React%20Native-v0.72.0-blue)](https://reactnative.dev/)
[![Firebase](https://img.shields.io/badge/Firebase-Cloud%20Firestore-orange)](https://firebase.google.com/)

Aplicativo demonstrativo de gerenciamento de despesas pessoais criado para explorar a integração entre:  
✅ **Sistemas de navegação** (Stack e Tab Navigation)  
✅ **Gerenciamento de estado** (Context API)  
✅ **Banco de dados em tempo real** (Firebase Firestore)

<p align="center">
  <img src="screenshots/tela2.png" width="200" alt="Lista de despesas"/>
  <img src="screenshots/tela1.png" width="200" alt="Adicionar despesa"/>  
</p>
<p align="center">
  <img src="screenshots/tela3.png" width="200" alt="Lista de despesas"/>
  <img src="screenshots/tela4.png" width="200" alt="Adicionar despesa"/>  
</p>

## ✨ Funcionalidades

- **Sistemas de navegação**:
  - Stack Navigation (fluxo principal)
  - Bottom Tab Navigation (navegação por abas)
  
- **Gerenciamento financeiro**:
  - Registro de despesas com data e valor
  - Visualização por períodos

- **Tecnologias avançadas**:
  - Integração com Firebase Firestore
  - Autenticação de usuários
  - Context API para estado global

## 🛠 Tecnologias Utilizadas

- React Native
- React Navigation
  - @react-navigation/native
  - @react-navigation/native-stack
  - @react-navigation/bottom-tabs
- Firebase
  - Firestore (banco de dados)
- Context API
- Axios

## 🔐 Variáveis de Ambiente

Crie um arquivo `.env` na raiz do projeto:

```env
BACKEND_URL=sua_url_do_firebase_aqui
```

## 🚀 Como Executar

1. Clone o repositório:

```bash
git clone https://github.com/pedester321/RNexpenseApp
cd expensesApp
```

2. Instale as dependências:

```bash
npm install
```

3. Inicie o aplicativo:

```bash
npm start
```

Ou, se estiver usando Expo:

```bash
expo start
```

4. Escaneie o QR Code com o aplicativo Expo Go no celular ou use um emulador.

## 📝 Licença

Este projeto está licenciado sob a licença MIT.

---

Desenvolvido por Pedro Castro como parte do curso **React Native - The Practical Guide** na Udemy.
