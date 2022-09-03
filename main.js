const categoryid = 1;

const loadNews = async (categoryid) => {
	const url = `https://openapi.programming-hero.com/api/news/category/${categoryid}`;
	

	try {
		console.log(url);
	const res = await fetch(url);
	const data = await res.json();
	displayNews(data.data);
	}
	catch (error) {
		console.log(error);
	}
	
	
};

const displayNews = (news) => {
	const newContainerDiv = document.getElementById("newContainerDiv");
	newContainerDiv.innerHTML = '';
	console.log(news);
	news.forEach((newsone) => {
		console.log(newsone);
		const newsoneDiv = document.createElement("div");

		newsoneDiv.classList.add("m-3");

		newsoneDiv.innerHTML = `
                        <div class="row g-0 border rounded ">
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
				
						<div class="d-flex justify-content-evenly align-items-around">
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
							<div class="mx-4 p-4">
								<p>
								<i class="fa-regular fa-eye"></i> &nbsp ${newsone.total_view}
								</p>
							</div>
							<div class="mx-2 p-4">
							 ${newsone.rating.number}
							
							</div>
							
							<div>
								<button onclick="loadDetails('${
									newsone._id
								}')" class="btn btn-primary" data-bs-toggle="modal"
								data-bs-target="#newsDetails"> Show Details</button>
							</div>
				
						</div>
							
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
	

	try {
		const res = await fetch(url);
	const data = await res.json();
	displayCategory(data.data.news_category);
	}
	catch {
		console.log(error);
	}
};
const displayCategory = (categories) => {
	const categoriesul = document.getElementById("catagoryButtonid");
	// console.log(categories);
	categories.forEach((category) => {
		console.log(category);
		const liTag = document.createElement("li");
		liTag.classList.add("nav-item", "mx-3", "active", "btn-primary");
		liTag.innerHTML = `
                
                <a onclick="loadNews('${category.category_id}')" class="nav-link btn btn-outline-primary " aria-current="page" href="#">${category.category_name}</a>
                `;

		categoriesul.appendChild(liTag);
	});
};

loadCategory();

const loadDetails = async (loadDetail) => {
	const url2 = `https://openapi.programming-hero.com/api/news/${loadDetail}`;
	
	try {
		const res = await fetch(url2);
		const data = await res.json();
		displayDetails(data.data[0]);	
	}
	catch {
		console.log(error);
	}
};

const displayDetails = (detail) => {
	console.log(detail.title);
	const newsDetailsModalid = document.getElementById("newsDetailsLabel");
	const newsDetailsModalBbodyid = document.getElementById('modalBodyid');
	
	newsDetailsModalid.innerText = detail.title;
	newsDetailsModalBbodyid.innerHTML = `
	<div>
		<img class="img-fluid" src="${detail.image_url}" alt="" />
	
	</div>
	<div>
	<p>${detail.details}</p>
	<p>${detail.total_view}</p>
	<p>${detail.rating.number}</p>
	<p>${detail.rating.badge}</p>
	
	</div>
	`;
	
};

loadNews("01");
// {_id: '0282e0e58a5c404fbd15261f11c2ab6a', others_info: {…}, category_id: '01', rating: {…}, total_view: 488, …}
// author: {name: 'Jimmy Dane', published_date: '2022-08-24 17:27:34', img: 'https://images.unsplash.com/photo-1633332755192-72…HxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80'}
// category
