const categoryid = 1;

const loadNews = async (categoryid) => {
	const url = `https://openapi.programming-hero.com/api/news/category/${categoryid}`;
	console.log(url);
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
                        <img   src="${
							newsone.image_url
						}" class="img-fluid " alt="...">
                        </div>
                        	<div class="col-md-8  justify-content-evenly align-items-end">
                        
					<div class="card-body m-3 p-2">
						<h5 class="card-title">${newsone.title}</h5>
						<div class="p-2 m-2">
						  <p class="card-text">
						  	${newsone.details.slice(0, 350)}...
						  </p>
						</div>
						
					<div>
					<div class="mx-3">
						<small class="text-muted">
				
						<div class="d-flex align-items-around">
							<div class="mx-1 px-1 p-1">
								<span id="img-span" >
							
								<img id="imageid" class=" rounded-circle " src="${newsone.author.img}" alt="" />
								</span>
							</div>
							<div class="mx-1 px-1 p-1>
								<span ">
								<p>${newsone.author.name} </p> 
								<p> ${newsone.author.published_date}</p>
								</span>
							</div>
							
						</div>
						
				
						<div>
								<button onclick="loadDetails('${
									newsone._id
								}')" class="btn btn-primary" data-bs-toggle="modal"
								data-bs-target="#newsDetails"> Show Details</button>
				
						</div>
				
				
						</small>
					</div>
				
			  
			   
			  
			
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

const loadDetails = async (loadDetail) => {
	const url2 = `https://openapi.programming-hero.com/api/news/${loadDetail}`;
	const res = await fetch(url2);
	const data = await res.json();
	displayDetails(data.data[0]);
};

const displayDetails = (detail) => {
	console.log(detail.title);
	const newContainerDiv = document.getElementById("newContainerDiv");

	// news.forEach((detail) => {
	// 	console.log(detail);
};
// {_id: '0282e0e58a5c404fbd15261f11c2ab6a', others_info: {…}, category_id: '01', rating: {…}, total_view: 488, …}
// author: {name: 'Jimmy Dane', published_date: '2022-08-24 17:27:34', img: 'https://images.unsplash.com/photo-1633332755192-72…HxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80'}
// category
