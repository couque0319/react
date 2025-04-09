import { useState } from 'react';

export default function BlogHomepage() {
  // 블로그 게시물 데이터
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "리액트로 블로그 만들기",
      date: "2025-04-09",
      category: "프로그래밍",
      summary: "리액트와 JSX를 사용하여 간단한 블로그를 만드는 방법을 알아봅니다.",
      content: "리액트(React)는 사용자 인터페이스를 구축하기 위한 JavaScript 라이브러리입니다. 컴포넌트 기반 아키텍처를 사용하여 재사용 가능한 UI 요소를 만들 수 있습니다. JSX는 JavaScript XML의 약자로, JavaScript 코드 내에서 HTML과 유사한 마크업을 작성할 수 있게 해주는 문법적 확장입니다. 이 두 가지 기술을 결합하면 강력하고 유연한 웹 애플리케이션을 구축할 수 있습니다. 이 블로그 포스트에서는 리액트와 JSX를 사용하여 블로그를 만드는 방법을 단계별로 알아보겠습니다."
    },
    {
      id: 2,
      title: "CSS로 블로그 스타일링하기",
      date: "2025-04-08",
      category: "디자인",
      summary: "블로그의 외관을 개선하기 위한 CSS 스타일링 팁과 트릭.",
      content: "CSS(Cascading Style Sheets)는 웹 페이지의 디자인과 레이아웃을 정의하는 스타일 시트 언어입니다. 효과적인 CSS 사용은 블로그의 가독성과 사용자 경험을 크게 향상시킬 수 있습니다. 이 포스트에서는 블로그 디자인을 위한 다양한 CSS 기법을 살펴보겠습니다. 반응형 디자인, 그리드 레이아웃, 타이포그래피 개선, 색상 조합 등 다양한 주제를 다룹니다. 또한 CSS 프레임워크와 전처리기를 사용하여 작업 흐름을 개선하는 방법도 알아보겠습니다."
    },
    {
      id: 3,
      title: "JavaScript 기초 다지기",
      date: "2025-04-07",
      category: "프로그래밍",
      summary: "웹 개발자가 알아야 할 필수 JavaScript 기초 지식 정리.",
      content: "JavaScript는 웹의 프로그래밍 언어로, 정적인 HTML 페이지에 동적인 기능을 추가할 수 있게 해줍니다. 이 포스트에서는 변수, 데이터 타입, 함수, 객체, 배열, 조건문, 반복문 등 JavaScript의 핵심 개념을 다룹니다. 또한 스코프, 클로저, 비동기 프로그래밍, 이벤트 처리 등 JavaScript의 고급 개념도 살펴보겠습니다. JavaScript를 잘 이해하면 웹 개발의 다양한 측면에서 더 효과적으로 작업할 수 있습니다."
    }
  ]);
  
  // 카테고리 목록
  const categories = ["전체", "프로그래밍", "디자인", "생활", "여행"];
  
  // 상태 관리
  const [selectedCategory, setSelectedCategory] = useState("전체");
  const [selectedPost, setSelectedPost] = useState(null);
  
  // 카테고리별 게시물 필터링
  const filteredPosts = selectedCategory === "전체" 
    ? posts 
    : posts.filter(post => post.category === selectedCategory);
  
  // 게시물 선택 처리
  const handlePostClick = (post) => {
    setSelectedPost(post);
    window.scrollTo(0, 0);
  };
  
  // 블로그 홈으로 돌아가기
  const handleBackToList = () => {
    setSelectedPost(null);
  };
  
  return (
    <div className="min-h-screen bg-gray-50">
      {/* 헤더 */}
      <header className="bg-white shadow">
        <div className="container mx-auto px-4 py-6">
          <div className="flex justify-between items-center">
            <h1 
              className="text-3xl font-bold text-gray-800 cursor-pointer" 
              onClick={handleBackToList}
            >
              My Blog
            </h1>
            <nav>
              <ul className="flex space-x-4">
                <li><a href="#" className="text-gray-600 hover:text-blue-500">홈</a></li>
                <li><a href="#" className="text-gray-600 hover:text-blue-500">소개</a></li>
                <li><a href="#" className="text-gray-600 hover:text-blue-500">연락처</a></li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
      
      <main className="container mx-auto px-4 py-8">
        {selectedPost ? (
          // 게시물 상세 보기
          <div className="max-w-3xl mx-auto">
            <button 
              onClick={handleBackToList}
              className="mb-6 bg-gray-200 hover:bg-gray-300 text-gray-800 py-2 px-4 rounded inline-flex items-center"
            >
              ← 목록으로 돌아가기
            </button>
            
            <article className="bg-white shadow rounded-lg overflow-hidden">
              <div className="p-6">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">{selectedPost.title}</h2>
                <div className="flex items-center text-gray-500 text-sm mb-6">
                  <span>{selectedPost.date}</span>
                  <span className="mx-2">•</span>
                  <span className="bg-blue-100 text-blue-800 rounded-full px-3 py-1">
                    {selectedPost.category}
                  </span>
                </div>
                <div className="prose max-w-none">
                  <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                    {selectedPost.content}
                  </p>
                </div>
              </div>
            </article>
          </div>
        ) : (
          // 게시물 목록
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* 사이드바 (카테고리) */}
            <div className="lg:col-span-1">
              <div className="bg-white shadow rounded-lg overflow-hidden sticky top-4">
                <div className="p-4 bg-gray-800 text-white font-bold">
                  카테고리
                </div>
                <ul>
                  {categories.map((category, index) => (
                    <li key={index}>
                      <button
                        className={`w-full text-left px-4 py-3 hover:bg-gray-100 border-b border-gray-200 ${
                          selectedCategory === category ? "font-bold bg-gray-100" : ""
                        }`}
                        onClick={() => setSelectedCategory(category)}
                      >
                        {category}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            {/* 게시물 목록 */}
            <div className="lg:col-span-3">
              <h2 className="text-2xl font-bold mb-6">
                {selectedCategory === "전체" ? "최신 게시물" : selectedCategory}
              </h2>
              
              {filteredPosts.length === 0 ? (
                <div className="bg-white shadow rounded-lg p-6 text-center text-gray-500">
                  게시물이 없습니다.
                </div>
              ) : (
                <div className="space-y-6">
                  {filteredPosts.map(post => (
                    <article 
                      key={post.id}
                      className="bg-white shadow rounded-lg overflow-hidden hover:shadow-md transition-shadow cursor-pointer"
                      onClick={() => handlePostClick(post)}
                    >
                      <div className="p-6">
                        <h3 className="text-xl font-bold text-gray-800 mb-2">
                          {post.title}
                        </h3>
                        <div className="flex items-center text-gray-500 text-sm mb-3">
                          <span>{post.date}</span>
                          <span className="mx-2">•</span>
                          <span className="bg-blue-100 text-blue-800 rounded-full px-3 py-1">
                            {post.category}
                          </span>
                        </div>
                        <p className="text-gray-600 mb-4">{post.summary}</p>
                        <div className="text-blue-500 font-medium">더 읽기 →</div>
                      </div>
                    </article>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
      </main>
      
      {/* 푸터 */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">My Blog</h3>
              <p className="text-gray-400">
                개발, 디자인, 그리고 일상에 관한 이야기를 나누는 공간입니다.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">링크</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">홈</a></li>
                <li><a href="#" className="hover:text-white">소개</a></li>
                <li><a href="#" className="hover:text-white">연락처</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">구독하기</h3>
              <p className="text-gray-400 mb-4">
                새로운 게시물 소식을 이메일로 받아보세요.
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="이메일 주소"
                  className="px-4 py-2 w-full rounded-l focus:outline-none text-gray-800"
                />
                <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-r">
                  구독
                </button>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400">
            <p>&copy; 2025 My Blog. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}