function updateServices(){
   
    const mobileBooth = document.getElementById('mobileBooth').value;
    console.log(mobileBooth)
    const service= document.getElementById('service');
    service.innerHTML='<option value="">Select Service</option>';
    const services  = {
        	Wina1: ['Airtel Money', 'MTN Money',' Zamtel Money','Zanaco', 'FNB'],
        	Wina2: ['Airtel Money', 'MTN Money', 'Zamtel Money',' FNB'],
        	Wina3: ['Airtel Money',' MTN Money', 'Zamtel Money', 'Zanaco', 'FNB'] ,
        	Wina4: ['Airtel Money', 'MTN Money', 'Zamtel Money'],
        	Wina5: ['Airtel Money', 'MTN Money', 'Zanaco', 'FNB'],
        	Wina6: ['Airtel Money', 'MTN Money', 'Zamtel Money'],

    };

        if  (mobileBooth  && services[mobileBooth]){
            services[mobileBooth].forEach(function(item){
                const option = document.createElement('option');
                option.value = item.toLowerCase();
                option.textContent=item;
                service.appendChild(option);
            
            });
        }
}