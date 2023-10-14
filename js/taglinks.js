// JavaScript로 태그 클라우드 클릭 이벤트 처리
const tagLinks = document.querySelectorAll('.tag-cloud-link');

tagLinks.forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault(); // 기본 동작(링크 이동) 방지

    // 선택한 태그 이름 가져오기
    const selectedTag = link.textContent;

    // 모든 게시물 숨김
    const allPosts = document.querySelectorAll('.blog-post');
    allPosts.forEach((post) => {
      post.style.display = 'none';
    });

    // 선택한 태그와 관련된 게시물 표시
    const selectedPosts = document.querySelectorAll(`.blog-post[data-tags*="${selectedTag}"]`);
    selectedPosts.forEach((post) => {
      post.style.display = 'block';
    });
  });
});
