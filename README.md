# 나만의 음악 유튜브 사이트 만들기<img src="https://media.giphy.com/media/oz45ELYgMoYVsZqmor/giphy.gif?cid=82a1493b46gqhff3pfz6g198ninfz0d73ywhq9v09ljhpnix&ep=v1_stickers_trending&rid=giphy.gif&ct=s" width="80px" height="40px" title="Github_Logo" />
평소에 음악을 좋아하여서 유튜브 API를 이용하여 유튜브 음악 사이트를 만들어보았습니다.

## 사이트 미리보기
[미리보기](https://youtube-project-cv6663h03-elese0s-projects.vercel.app/)

## 설치
npx creact-react-app .

-모드설치

npm install react-router-dom axios react-icon react-player sas
s react-helmet-async swiper

1. react-router-dom: React 애플리케이션에서 라우팅을 구현하기 위한 패키지입니다. URL 경로에 따라 다른 컴포넌트를 렌더링하거나 페이지 간의 전환을 관리할 수 있습니다.
2. axios: HTTP 요청을 보내고 응답을 받기 위한 패키지입니다. 서버와의 API 통신이나 데이터 요청에 사용될 수 있습니다.
3. react-icons: 다양한 아이콘을 사용하기 위한 패키지입니다. React 컴포넌트 형태로 아이콘을 쉽게 표현할 수 있습니다.
4. react-player: 비디오나 오디오 재생을 위한 패키지입니다. 다양한 형식의 미디어 파일을 재생하고 컨트롤할 수 있습니다.
5. react-helmet-async: 동적으로 HTML <head> 요소를 수정하기 위한 패키지입니다. 페이지의 제목, 메타 태그, 스타일 시트 등을 동적으로 변경할 수 있습니다.
6. swiper: 모바일 터치 슬라이더나 갤러리 형식의 컴포넌트를 만들기 위한 패키지입니다. 다양한 슬라이드 효과와 인터랙션을 구현할 수 있습니다.


## swiper
Navigation, Autoplay good

gitignore .env 추가 껏다켜서 실행

## postman.com
Postman은 API 개발 및 테스트를 위한 프로그램입니다. Postman을 사용하면 웹 서비스를 호출하고 응답을 확인할 수 있으며, API 요청을 생성하고 관리할 수 있습니다. Postman은 사용자가 웹 API를 테스트하고 디버깅하는 데 도움이 되는 다양한 기능을 제공합니다. 예를 들어, 다양한 HTTP 메서드(GET, POST, PUT, DELETE 등)를 사용하여 API를 호출하고, 요청에 필요한 헤더와 매개변수를 설정할 수 있습니다. 또한, API 응답을 검사하고 검증할 수 있는 기능도 제공합니다. Postman은 개발자들 사이에서 널리 사용되며, API 개발 및 테스트 작업을 효율적으로 수행할 수 있도록 도와줍니다.


## Route
<Route path='/' element={<Home />} />: 루트 경로인 '/'에 대한 요청이 들어오면 <Home /> 컴포넌트를 렌더링합니다.
<Route path='/today' element={<Today />} />: '/today' 경로에 대한 요청이 들어오면 <Today /> 컴포넌트를 렌더링합니다.
<Route path='/Musician' element={<Musician />} />: '/Musician' 경로에 대한 요청이 들어오면 <Musician /> 컴포넌트를 렌더링합니다.
<Route path='/channel/:channelId' element={<Channel />} />: '/channel/:channelId'와 같은 형식의 경로에 대한 요청이 들어오면 <Channel /> 컴포넌트를 렌더링합니다. :channelId는 동적인 경로 매개변수로, 실제로 사용되는 값에 따라 해당 컴포넌트가 렌더링됩니다.
<Route path='/search/:searchId' element={<Search />} />: '/search/:searchId'와 같은 형식의 경로에 대한 요청이 들어오면 <Search /> 컴포넌트를 렌더링합니다. 마찬가지로 :searchId는 동적인 경로 매개변수입니다.
이러한 <Route> 컴포넌트들은 React 애플리케이션에서 URL 경로에 따라 적절한 컴포넌트를 렌더링해주는 역할을 합니다. 사용자가 특정 경로로 이동하면 해당 경로에 맞는 컴포넌트가 화면에 표시되는 웹 페이지를 구현할 수 있습니다.

## REST Pull API 
REST Pull API는 REST 아키텍처를 기반으로 데이터를 가져오는 API입니다. REST는 Representational State Transfer의 약자로, 웹 서비스 간의 통신을 위한 아키텍처 스타일입니다. REST Pull API는 클라이언트가 서버로부터 데이터를 요청하고 가져오는 방식으로 작동합니다.

REST Pull API를 사용하여 데이터를 가져오기 위해서는 다음과 같은 단계를 따를 수 있습니다:

API 엔드포인트 식별: 데이터를 가져올 대상 서버의 API 엔드포인트를 식별합니다. 엔드포인트는 서버에서 제공하는 특정 리소스에 대한 URL입니다.
HTTP 요청 생성: GET 메서드를 사용하여 데이터를 가져오기 위한 HTTP 요청을 생성합니다. 이 요청은 엔드포인트 URL과 필요한 매개변수, 헤더 등을 포함할 수 있습니다.
요청 전송: 생성한 HTTP 요청을 서버로 전송합니다. 이를 통해 서버는 요청을 처리하고 관련 데이터를 응답으로 반환합니다.
응답 처리: 서버로부터 받은 응답을 클라이언트에서 처리합니다. 응답은 JSON, XML 등의 형식으로 전달될 수 있으며, 클라이언트는 이를 파싱하여 필요한 데이터를 추출하고 활용할 수 있습니다.
REST Pull API는 다양한 웹 서비스와 통합하고 데이터를 가져오는 데 사용됩니다. 예를 들어, 외부 서비스의 데이터를 가져와서 애플리케이션에 표시하거나 분석하는 등의 작업에 활용할 수 있습니다.

## ?
link to
params
useEffect


## 에러
git config --global core.autocrlf false

# react 서스펜스
https://www.daleseo.com/react-suspense/
React의 Suspense는 컴포넌트가 준비될 때까지 로딩 상태를 표시하는 방법을 제어하는 기능입니다.

Suspense는 우리가 데이터를 불러오는 동안 일시적으로 "대기" 상태를 표현할 수 있게 해줍니다. 예를 들어, API 호출 결과를 기다리는 동안 로딩 스피너를 보여주는 것과 같은 작업을 수행할 수 있습니다.

Suspense를 사용하면, 우리는 이러한 비동기 로직을 컴포넌트의 바깥으로 빼내고, 대신 컴포넌트 내부에서 필요한 데이터가 준비되었는지 여부만을 신경쓰면 됩니다. 이는 코드의 가독성을 높여주며, 비동기 로직 처리를 더욱 수월하게 만들어 줍니다.
