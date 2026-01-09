# CursorClicker

Cursor 에디터를 활용한 AI 코딩으로 간단한 클리커 앱을 만드는 연습용 앱.

## 목적

나만의 간단한 클리커 앱을 AI 코딩(바이브 코딩 또는 AI 에이전트 이용)으로 완성한다.

## 요구사항 정리

- 클리커 앱 구현
  - 환경 정의
    - Vite + VanillaJS로 진행.
    - JavaScript 파일이 저장되는 곳은 `./src` 아래.
    - HTML 파일과 CSS 파일이 저장되는 곳은 `.`.
  - 클릭 영역 (`body`) 정의
    - `./assets/backgrounds/main.png`를 바둑판 타일 형식의 배경으로 사용한다.
    - 스크린 전체를 클릭할 수 있다. 즉, 클릭 영역은 `width: 100vw`이고, `height: 100dvh`이다.
    - 오버플로우된 영역은 전부 `hidden` 처리한다. 즉, `overflow: hidden`이다.
  - 클릭 시 발생하는 일 정의
    1. 후술할 배지들 중 하나를 랜덤으로 고른다.
    2. 배지 이미지의 중앙을 기준으로, 클릭한 곳의 좌표에 해당하는 위치에 붙인다. 이때, 해당 이미지를 붙이는 과정은 `const icon = document.createElement('img')`와 `document.body.appendChild(icon)`을 활용한다.
    3. 배지가 붙은 후, 그 배지에 해당하는 음원을 `new Audio(<해당 음원의 주소>).play()`로 재생한다.
  - 배지의 종류
    - Cursor 배지
      - 발생 확률: `90%`
      - 배지의 사이즈 비율 범위: `80%` 이상 `125%` 이하의 무작위 비율
      - 배지의 이미지 주소: `./assets/sounds/cursor.png`
      - 배지의 음원 주소: `./assets/sounds/cursor.m4a`
    - 코이시 배지
      - 발생 확률: `5%`
      - 배지의 사이즈 비율 범위: `90%` 이상 `115%` 이하의 무작위 비율
      - 배지의 이미지 주소: `./assets/sounds/koishi.png`
      - 배지의 음원 주소: `./assets/sounds/koishi.m4a`
    - 호시노 배지
      - 발생 확률: `5%`
      - 배지의 사이즈 비율 범위: `90%` 이상 `115%` 이하의 무작위 비율
      - 배지의 이미지 주소: `./assets/sounds/hoshino.png`
      - 배지의 음원 주소: `./assets/sounds/hoshino.m4a`

## 준비 작업

- 요구사항을 명확하게 만듦.
- 명확하게 만들어진 요구사항을 최대한 잘게 쪼개어 각종 세부사항을 정의.

## 1차 실행

- Cursor IDE의 Auto 모델 Agent에게 `클리커 앱을 여기서 구현해줘. 아래에 내가 요구사항을 정리해놨어. <README.md (11-39)>`라는 요청을 보냄.
- Agent는 다음과 같은 파일을 생성함.
  - `.` 위치
    - `package.json`
      - `vite`가 `^5.0.0`으로 나옴. (작성 시점에서의 최신 버전은 `7.3.1`이다.)
      - `dev`, `build`, `preview` 등 실행에 필요한 명령어가 정의되어 있다.
    - `vite.config.js`
      - `server.host`가 `true`로 되어 있다. 즉, 서버가 실행되는 동안 로컬 외부에서도 접속할 수 있게 해놨다.
    - `index.html`
      - 타이틀이 Cursor Clicker라고 되어 있다.
      - 아이콘이 Cursor 배지의 이미지 주소로 되어 있다.
  - `./src` 위치
    - `main.js`
      - 하나의 파일로 생성되어 있다.
      - `style.css`를 import하고 있다.
      - 배지의 정보에는 이름, 가중치, 사이즈 범위, 이미지 주소, 사운드 주소가 정의되어 있다.
      - `body` 영역 클릭 시 `spawnBadgeAt`를 호출한다. `spawnBadgeAt`는 다음과 같은 과정을 거쳐 배지를 붙인다.
        1. `pickBadge`를 통해 배지를 뽑는다. 이 때, 모든 가중치의 합의 범위 내에서 뽑인 값인 `roll`에서 각 배지의 순서대로 가중치를 빼는데, 이 때 `roll`이 0 이하가 되는 시점의 배지가 뽑힌다.
        2. 1번 과정에서 뽑힌 배지인 `badge`의 스케일을 `randomInRange`로 결정한다. 이 때 스케일의 범위는 `[badge.sizeRange[0], badge.sizeRange[1])` 이다.
        3. `document.createElement('img')`를 통해 새로운 배지를 생성한다. 이후, 이미지 주소, 클래스(=`badge`), 스타일(`left`, `top`, `transform`)이 정의된다. 이 때, 표시할 배지의 기준점이 `transform`의 `translate(-50%, -50%)`로 잡혀 있다.
        4. 3번 과정에서 생성된 이미지가 `document.body`의 마지막 자식 노드로 append된다.
        5. `new Audio(<해당 음원의 주소>).play()`로 배지의 음원을 재생한다.
    - `style.css`
      - 분명 `.` 위치에 생성해달라고 했었는데, `./src` 위치에 생성되어 있다.
      - `body`의 `width`와 `height`가 `100vw`와 `100dvh`로 정의되어 있으며, `background`는 `./assets/backgrounds/main.png`를 `256px * 256px`로 타일 반복하는 형태이다.
      - `badge`의 `width`와 `height`가 `96px`로 정의되어 있다.

## 1차 실행 이후 Agent에게 피드백 제공

- `vite`는 최신 버전을 사용해줘. 지금 최신 버전은 `7.3.1`로 나와 있어.
- 이 앱을 `dev`나 `preview` 등등으로 돌릴 때 로컬 이외에도 LAN 환경에 연결된 디바이스로로 접속할 수 있나봐. 난 로컬만 접근할 수 있길 원해.
- `./src/main.js`의 각 함수와 변수를 각각의 책임이 명확한 모듈로 분할해줘. 이 때, `./src/main.js`에는 각 모듈을 import하고 앱을 초기 로딩하는 과정만 담아두면 돼.
- `body`의 배경은 굳이 `256px * 256px`로 고정하지 않아도 돼. 이미지 고유의 원본 크기를 사용할 수 있게끔 해줘.
- `spawnBadgeAt`의 `const total = badges.reduce((sum, badge) => sum + badge.weight, 0);`를 함수 밖으로 내어줘. 클릭할 때의 비용을 줄이고 싶어.

## 2차 실행

- Cursor IDE의 Auto 모델 Agent에게 `아래 피드백을 바탕으로, 앱을 수정해줘. <README.md (77-81)>`라는 요청을 보냄.
- Agent는 다음과 같은 작업을 함.
  - `vite` 버전을 `5.0.0`에서 `7.3.1`로 업데이트.
  - `vite.config.js`에서 로컬로만 접속할 수 있도록, `server.host`가 `'localhost'`로 변경됨.
  - `background-size`가 `auto`로 변경되어 원본 크기의 이미지로 이루어진 배경 타일을 볼 수 있게 됨.
  - `./src/main.js`에 있던 각 함수와 변수들이 `handleClick`과 `document.body.addEventListener('click', handleClick);`만 제외하고 모두 각 역할에 맞는 모듈로 분할되어 이동함.
    - `./src/badges.js`: 각 배지의 정보와 모든 배지의 가중치의 합 등등 배지의 데이터가 든 모듈.
    - `./src/utils.js`: 정해진 범위 내의 랜덤값을 리턴하는 등의, 유틸리티 목적을 가진 모듈.
    - `./src/badgePicker.js`: 배지를 뽑는 기능과 관련된 모듈.
    - `./src/badgeSpawner.js`: 배지를 붙이는 기능과 관련된 모듈.
    - `./src/main.js`: 모듈 import와 초기화만 담당하게 된 모듈. 즉, 이제 엔트리 역할만 수행하는 모듈.

## 저작권 정보

Cursor is an integrated development environment(IDE) developed by Anysphere.
© Anysphere, Inc.

Koishi Komeiji(古明地こいし) is a character from Touhou Project.
© 上海アリス幻樂団.

Hoshino Takanashi(小鳥遊ホシノ) is a character from Blue Archive.
© NEXON Korea Corp. & NEXON GAMES Co., Ltd.
