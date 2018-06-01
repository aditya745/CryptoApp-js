let dataArr = [];
	fetch("https://api.coinmarketcap.com/v1/ticker/?limit=2000")
	.then(result => {
		
		return result.json();
	})
	.then(data => {
		const dataDiv = document.querySelector(".data");
		const numberOfCoins = document.querySelector("#nom");
		
		let h6 =document.createElement("p");
		h6.textContent = `Currently there are ${data.length} coins on Cryptocurrency market`;
		numberOfCoins.appendChild(h6);

		
		
		dataArr = data;
		const displayItmes = (dataArr)=>{
			data.forEach(coin =>{
			let coinDiv = document.createElement('div');
			coinDiv.className = "coin";
			
			let name = coin.name;
			let symbol = coin.symbol;
			let rank = coin.rank;
			let price = coin.price_usd;
			let price_btc = coin.price_btc;
			let h1 = document.createElement("p");
			h1.className = "bold";
			h1.textContent = name;
			let h2 = document.createElement("p");
			h2.textContent = `Symbol: ${symbol}`;
			let h3 = document.createElement("p");
			h3.textContent = `Rank: ${rank}`;
			let h4 = document.createElement("p");
			h4.textContent = `Price-USD: ${price}`;
			let h5 = document.createElement("p");
			h5.textContent = `Price-btc: ${price_btc}`;

			let inputItem = document.querySelector("input");
			inputItem.addEventListener("keyup",function(e){
			let inputText = e.target.value.toLowerCase();

			const itemName = name;
	
			if(itemName.toLowerCase().indexOf(inputText)!= -1){
				coinDiv.style.display = "";
			}
			else{
				coinDiv.style.display = "none";
			}

		});
		
			coinDiv.appendChild(h1);
			coinDiv.appendChild(h2);
			coinDiv.appendChild(h3);
			coinDiv.appendChild(h4);
			coinDiv.appendChild(h5);
			dataDiv.appendChild(coinDiv);
			//document.body.appendChild(h1);
		})
	}
		displayItmes(dataArr);
		
	const remove = ()=>{
		document.querySelector(".data").innerHTML = "";
	}
		//function sortByPrice(data) {
			
			let sortByPrice = document.querySelector(".btn1");
			sortByPrice.addEventListener("click",function(e){
				remove();
				const sorting = dataArr.sort(function(a,b){
					return b.price_usd - a.price_usd;
				})

				displayItmes(sorting);
			})

			let sortByName = document.querySelector(".btn2");
			sortByName.addEventListener("click",function(e){
				remove();
				const sorti = dataArr.sort(function(a,b){
					
    				let x = a.name.toLowerCase();
    				let y = b.name.toLowerCase();
   					 return x < y ? -1 : x > y ? 1 : 0;
			})
				displayItmes(sorti);
				})

				
			})
			
		//}
	//})

	.catch(error => console.log(error));

	
