





const loadNews = async (categoryid) => {
        const url = `https://openapi.programming-hero.com/api/news/category/${categoryid}`;
        console.log(url)
        const res = await fetch(url);
        const data = await res.json();
        displayNews(data.data);
};
	const displayNews = (news) => {
		const newContainerDiv = document.getElementById("newContainerDiv");
                console.log(news);
		news.forEach((newsone) => {
			console.log(newsone);
                        const newsoneDiv = document.createElement("div");
                        
			newsoneDiv.classList.add("m-3");
			newsoneDiv.innerHTML = `
                        <div class="row g-0">
                        <div class="col-md-4 ">
                        <img src="${newsone.image_url}" class="img-fluid rounded-start" alt="...">
                        </div>
                        <div class="col-md-8">
                        <div class="card-body m-2">
                                <h5 class="card-title">${newsone.title}</h5>
                                <p class="card-text">${newsone.details.slice(
									0,
									350,
								)}...</p>
                                <p class="card-text"><small class="text-muted">
                               <span> ${newsone.author.img}</span> <span> <p>${
				newsone.author.name
			} </p> <p> ${newsone.author.name}</p></span>
                                        ${newsone.author.published_date}
                                </small></p>
                        </div>
                        </div>
                        </div>
                
                `;
                
			newContainerDiv.appendChild(newsoneDiv);
		});
	};



loadNews();

const loadCategory = async () => {
	const url = "https://openapi.programming-hero.com/api/news/categories";
	const res = await fetch(url);
	const data = await res.json();
	displayCategory(data.data.news_category);
};
const displayCategory = (categories) => {
	const categoriesul = document.getElementById("catagoryButtonid");
	// console.log(categories);
	categories.forEach((category) => {
		console.log(category);
		const liTag = document.createElement("li");
		liTag.classList.add("nav-item");
		liTag.innerHTML = `
                
                <a onclick="loadNews('${category.category_id}')" class="nav-link btn" aria-current="page" href="#">${category.category_name}</a>
                `;

		categoriesul.appendChild(liTag);
	});
};



loadCategory();
// {_id: '0282e0e58a5c404fbd15261f11c2ab6a', others_info: {…}, category_id: '01', rating: {…}, total_view: 488, …}
// author: {name: 'Jimmy Dane', published_date: '2022-08-24 17:27:34', img: 'https://images.unsplash.com/photo-1633332755192-72…HxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80'}
// category_id: "01"