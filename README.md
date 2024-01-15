Este README descreve o aplicativo e fornece instruções passo a passo sobre como construir e implantar um aplicativo React Native utilizando o Expo. O Expo é uma ferramenta que facilita o desenvolvimento e o deployment de aplicativos React Native, eliminando a necessidade de configurações complexas.

# Descrição do aplicativo

O SensorSync é uma aplicação inovadora que transforma seu smartphone em uma ferramenta de coleta e visualização de dados de sensores. Com este aplicativo, você pode extrair informações de dois sensores do seu dispositivo e armazená-las de forma organizada em um banco de dados integrado. Além disso, a aplicação oferece uma interface intuitiva para visualizar esses dados tanto em formato de gráfico quanto em tabelas, proporcionando uma análise detalhada e compreensível.

### [Ver protótipos de tela](https://www.figma.com/file/Va4G8Ow6rJQY6SHmCBlPr1/SensorSync?type=design&node-id=0%3A1&mode=design&t=wl3hFifQ4sS5UmfN-1)

## Principais Recursos:
### Coleta de Dados de Sensores:
O SensorSync suporta dois tipos sensores presentes nos smartphones modernos: o acelerômetro e o magnetômetro. Ele permite que você colete dados precisos desses sensores.

### Armazenamento:
Todos os dados coletados são armazenados de forma segura em um banco de dados na nuvem. Isso permite que você acumule uma extensa base de dados ao longo do tempo.

### Visualização Gráfica:
O aplicativo oferece recursos de visualização, permitindo que você analise os dados em forma de gráficos. Isso facilita a identificação de padrões, tendências e anomalias, proporcionando insights valiosos.

### Exibição em Tabelas:
Além dos gráficos, o SensorSync disponibiliza uma visualização tabular dos dados coletados. Esta apresentação organizada facilita a interpretação rápida e a comparação de valores específicos.

### Interface Intuitiva:
O design amigável e intuitivo do SensorSync torna a navegação fácil e acessível para todos os usuários, independentemente de sua experiência em coleta de dados ou análise.

## Como Usar:
### Instale o Aplicativo:
Faça o download do .apk que está presente nesse repositório e o instale no seu dispositivo Android.

### Inicie a Coleta:
Ative a coleta de dados e deixe o aplicativo aberto e na página de coleta. Quando quiser parar a coleta é só apertar no botão "Desativa coleta" ou sair da página de coleta. 

### Visualize os Dados:
Entre no menu "Ver dados" para visualizar os dados em gráficos e/ou tabelas.

*obs: os dados ainda não são separados por usuário/celular. Todos os dados de todos os usuários/celulares são salvos na mesma base, sem dinstições.

# Instruções para rodar o app na sua máquina

## Pré-requisitos

Certifique-se de ter as seguintes ferramentas instaladas em sua máquina antes de começar:

- [Node.js](https://nodejs.org/) - Recomenda-se a versão LTS.
- [Expo CLI](https://docs.expo.dev/workflow/expo-cli/) - Instale utilizando `npm install -g expo-cli`.
- [EAS CLI](https://docs.expo.dev/eas-update/getting-started/) - Instale utilizando `npm install --global eas-cli`

Para a conexão com a API, é necessária a utilização de um arquivo das chaves EXPO_PUBLIC_API_KEY e EXPO_PUBLIC_API_BASE_URL. Você pode adicioná-las no arquivo index.js da pasta api.

## Passos para buildar e executar localmente

1. **Clone o Repositório:**

	```bash
	git clone git@github.com:icaromourao/sensor-sync.git
	cd sensor-sync
	```

2. **Instale as Dependências:**

	```bash
	npm install
	```

3. **Inicie o Servidor de Desenvolvimento:**
	```bash
	npm run start
	```
	Isso irá gerar algumas informações no seu terminal. Dentre as informações, existirá um QR Code. Você pode escanear o código QR com o aplicativo Expo Go no seu dispositivo móvel ou executar em um emulador.

## Build

1. **Para iOS:**
	```bash
	eas build -p ios
	```

2. **Para Android:**
	```bash
	eas build -p android
	```

3. **Para ambos iOS e Android:**
	```bash
	eas build -p all
	```

## Deploy

1. **Expo Go:**
	Para compartilhar o aplicativo com outras pessoas antes de publicar nas lojas, você pode usar o Expo Go.
	```bash
	expo publish
	```
	Compartilhe o link gerado com os usuários para que eles possam acessar o aplicativo via Expo Go.

2. **Publicação nas Lojas:**
	A [documentação oficial do Expo](https://docs.expo.dev/submit/introduction/) deve ser consultada para a publicação doo aplicativo nas lojas (App Store e Google Play).

## Melhorias

1. **Salvar dados por usuário/celular**
2. **Adicionar mais sensores**
3. **Melhorar os parâmetros de visualização dos dados nos gráficos e tabelas**
