# CursorClicker

Cursor 에디터를 활용한 AI 코딩으로 간단한 클리커 앱을 만드는 연습용 앱.

## 목적

나만의 간단한 클리커 앱을 AI 코딩(바이브 코딩 또는 AI 에이전트 이용)으로 완성한다.

## 요구사항 정리

- 클리커 앱 구현
  - 클릭 영역 정의
    - `./backgrounds/main.png`를 바둑판 타일 형식의 배경으로 사용한다.
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
      - 배지의 이미지 주소: `./sounds/cursor.png`
      - 배지의 음원 주소: `./sounds/cursor.m4a`
    - 코이시 배지
      - 발생 확률: `5%`
      - 배지의 사이즈 비율 범위: `90%` 이상 `115%` 이하의 무작위 비율
      - 배지의 이미지 주소: `./sounds/koishi.png`
      - 배지의 음원 주소: `./sounds/koishi.m4a`
    - 호시노 배지
      - 발생 확률: `5%`
      - 배지의 사이즈 비율 범위: `90%` 이상 `115%` 이하의 무작위 비율
      - 배지의 이미지 주소: `./sounds/hoshino.png`
      - 배지의 음원 주소: `./sounds/hoshino.m4a`

## 저작권 정보

Cursor is an integrated development environment(IDE) developed by Anysphere.
© Anysphere, Inc.

Koishi Komeiji(古明地こいし) is a character from Touhou Project.
© 上海アリス幻樂団.

Hoshino Takanashi(小鳥遊ホシノ) is a character from Blue Archive.
© NEXON Korea Corp. & NEXON GAMES Co., Ltd.
