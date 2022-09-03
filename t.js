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



// {_id: '0282e0e58a5c404fbd15261f11c2ab6a', others_info: {…}, category_id: '01', rating: {…}, total_view: 488, …}
// author: {name: 'Jimmy Dane', published_date: '2022-08-24 17:27:34', img: 'https://images.unsplash.com/photo-1633332755192-72…HxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80'}
// category

// data: [,…]
// 0: {_id: "f69a695f037cd9484cecaea37ca71011", others_info: {is_todays_pick: false, is_trending: true},…}
// author: {name: "Jennifer Wood", published_date: "2022-08-30 16:38:45",…}
// category_id: "01"
// details: "Tucker Carlson has rarely met a dictator's ass he didn't want to kiss, and Vladimir Putin is at the very top of that puckering up list. The Fox News host is something of a folk hero in Russia: Because of the pro-Putin propaganda he so often spews, the Kremlin has encouraged Russia's state TV to air as much of Tucker's face as possible — and they're certain to love his latest rant about how Putin is winning the war in Ukraine, which does not seem to be the case. But on Fox News, what Tucker says goes."
// image_url: "https://i.ibb.co/BZZ5WKv/unsplash-Eh-Tc-C9s-YXsw-4.png"
// others_info: {is_todays_pick: false, is_trending: true}
// rating: {number: 4.8, badge: "Excellent"}
// thumbnail_url: "https://i.ibb.co/k8XBcMX/unsplash-Eh-Tc-C9s-YXsw-15.png"
// title: "Tucker Carlson Swears Vladimir Putin Is Winning The War In Ukraine"
// total_view: 400
// _id: "f69a695f037cd9484cecaea37ca71011"
// status: true
