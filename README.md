## 🔍 Project Overview

Asana는 명상이나 집중을 위해 자신이 주로 듣는 음악 링크를 저장해 플레이리스트를 보여주고, 플레이 할 수 있는 url 링크 저장소 서비스입니다.

이번 프로젝트는 TypeScript와 GraphQL, next.js을 공부하면서, 간단한 프로젝트를 하나 만들어 보아야겠다 다짐을 하며 시작하게 된 작업입니다.

사용자가 회원가입을하고 로그인을 하면 youtube나 sound cloud 등에서 명상음악이나 개인이 마음에드는 음악 등의 링크를 iframe url을 입력해 생성하면, 
streams 페이지에서 자신이 등록한 음악을 감상 할 수 있습니다.
생성한 영상링크는 삭제와 수정이 가능합니다.

<br />

>✨ 아래 링크에서 프로젝트 데모 확인이 가능합니다. <br />
[Asana Demo](https://asana-streams.herokuapp.com/)

<br />
#### 사용기술
- HTML5 / CSS3
- Typescript
- React
- GraphQL
- next.js
- Apollo
- Styled-components, material-ui

#### 구현기능사항
- 회원가입/로그인/로그아웃
- 음악 stream CRUD 
- 랜딩페이지 scrollDown, scrollUp
- 반응형 웹

<hr />
<br />

### ✨ 첫 랜딩페이지
![](https://images.velog.io/images/bbio3o/post/7bf83000-d3b1-4efb-bc7c-c5a137fd3c02/%E1%84%85%E1%85%A2%E1%86%AB%E1%84%83%E1%85%B5%E1%86%BC.gif)<br />
첫 화면 랜딩 페이지 입니다.

<br />

### ✨ 회원가입 / 로그인 / 로그아웃
![](https://images.velog.io/images/bbio3o/post/a657ec65-ad9b-474a-a082-1d69f2b6c380/%E1%84%85%E1%85%A9%E1%84%80%E1%85%B3%E1%84%8B%E1%85%B5%E1%86%AB.gif)
**jwt**를 이용하여 토큰을 생성해 유저와 토큰을 클라이언트에 전달하여 토큰을 저장해주고**(회원가입)** , email로 DB의 user 유무를 확인하고 유저가 있다면, **bcrypt**를 이용해 패스워드 비교합니다.**(로그인)**, 클라이언트에서 저장된 토큰을 비워주는 방식**(로그아웃)**을 통해 구현하였습니다.

<br />

### ✨ Create 페이지
![](https://images.velog.io/images/bbio3o/post/10974ef0-306a-4867-a050-b5e31642d1b0/Create.gif)
<br />
로그인 후에 Create 페이지로 이동하면, Title과 Description, iframe URL입력을 통해 stream을 생성할 수 있습니다. 생성 후에는 next.js의 **useRouter**를 기능을 이용해 리스트를 볼 수 있는 Streams 페이지로 이동되도록 구현하였습니다.


### ✨ Update, Delete 기능
![](https://images.velog.io/images/bbio3o/post/f1f465bb-0553-43de-919d-ba398303379e/%E1%84%89%E1%85%AE%E1%84%8C%E1%85%A5%E1%86%BC%E1%84%89%E1%85%A1%E1%86%A8%E1%84%8C%E1%85%A6.gif)
<br />
생성한 stream 내용을 수정하고 삭제할 수 있는 기능을 구현하였습니다.

### ✨ Streams 페이지
![](https://images.velog.io/images/bbio3o/post/bf9cd102-7b34-48fe-9f13-69cc3f17f35a/%E1%84%89%E1%85%B3%E1%84%90%E1%85%B3%E1%84%85%E1%85%B5%E1%86%B7.gif)
<br />
로그인 후 Streams페이지로 이동하면, 생성한 명상음악 리스트가 확인 가능하며, 클릭하면, 저장한 노래를 재생할 수 있습니다. 

<br />

### ✨ scrollDown, scrollUp
![](https://images.velog.io/images/bbio3o/post/0c93a55a-c813-4110-8caa-7faae13b1cc7/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%A9%E1%86%AF.gif)
<br />
화살표 이미지 svg에 애니메이션을 주어 사용자 눈에 띌 수 있도록 구현하고, 유저가 스크롤을 하면 **window.pageYOffset**을 이용해 최상단으로 자동 스크롤 업을 할 수 있는 버튼을 구현하였습니다.

<br />

### ✨ 헤더색 Dynamic 변경
![](https://images.velog.io/images/bbio3o/post/a5385517-95cb-49ee-b278-bfb737a7a0da/%E1%84%92%E1%85%A6%E1%84%83%E1%85%A5%E1%84%89%E1%85%A2%E1%86%A8.gif)
<br />
nextjs의 **useRouter**기능을 통해 구현하였습니다.

<br />

### ✨ 반응형 웹
![](https://images.velog.io/images/bbio3o/post/148c7eb3-ffde-4e21-a6a4-add237c1a900/%E1%84%87%E1%85%A1%E1%86%AB%E1%84%8B%E1%85%B3%E1%86%BC%E1%84%92%E1%85%A7%E1%86%BC.jpg)
<br />
데스크탑, 아이패드, 모바일 순으로 반응형 웹을 구현하였습니다.

<br />
<hr />
<br />

### 🌿 리뷰
Asana 프로젝트에서는 좀 더 다양한 프레임워크와 라이브러리에 익숙해 지려 GraphQL, Next.js 등을 도입하였습니다.<br />
Node.js와 Javascript, react만으로 웹을 구현 할 때는 다이내믹한 자유로움이 있었지만,<br />
이번 프로젝트에서 사용한 프레임워크들을 도입할수록 제약사항이나 환경설정이 많아져 힘들었지만,<br />
나중에 많은 사람들과 규모 있는 프로젝트를 할 경우 로직이 통일되어 효율적이겠다는 생각을 했습니다.<br />
Next.js와 함께 서버사이드 렌더링 전체적인 흐름을 읽을 수 있었으며,<br />
코드를 읽기 쉽게 도와주고, 데이터에 타입을 명시해주어 안정적인 프로그래밍이 가능하도록 하는TypeScript를 배울 수 있었습니다. static 언어인 TypeScript를 더 공부하여 OOP에 익숙해지려합니다.<br />
Typescript는 runtime에서 타입이 정의되는 자바스크립트와 달리 타입을 따로 정해줘야 한다는 점이 번거롭지만, 이 귀찮음에 익숙해져서 추후 규모있고 안정적인 프로그래밍 서비스를 만드는 개발자가 되고싶습니다.
