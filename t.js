const loadNews = async () => {
	const url = "https://openapi.programming-hero.com/api/news/category/01";
	const res = await fetch(url);
	const data = await res.json();
	displayNews(data.data);
};
const displayNews = (news) => {
	const newContainerDiv = document.getElementById('newContainerDivid');
	console.log(news);
		
	
}
loadNews();