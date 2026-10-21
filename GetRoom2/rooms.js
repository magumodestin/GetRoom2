      const allRooms=[
      {id:1,price:5300,distance:7.8,type:"Studio Apartment",amenities:["gym","wifi"],title:"Waterval East 1"},
      {id:2,price:3800,distance:3.4,type:"Studio Apartment",amenities:["wifi","laundry","gym"],title:"Campus Court 2"},
      {id:3,price:3500,distance:6.1,type:"Shared Room",amenities:["study","laundry","gym","wifi"],title:"Geelhout Village 3"},
      {id:4,price:4200,distance:9.5,type:"Studio Apartment",amenities:["study","gym","security","laundry","wifi"],title:"Boitekong Rooms 4"},
      {id:5,price:5300,distance:0.3,type:"Single Room",amenities:["laundry","parking","security"],title:"Tlhabane West 5"},
      {id:6,price:2100,distance:6.1,type:"Studio Apartment",amenities:["gym","laundry","security","wifi"],title:"Geelhout Village 6"},
      {id:7,price:1800,distance:2.0,type:"Shared Room",amenities:["wifi","laundry","gym"],title:"Bafokeng Residence 7"},
      {id:8,price:4500,distance:9.0,type:"Shared Apartment",amenities:["laundry","study","wifi"],title:"Central Lofts 8"},
      {id:9,price:4000,distance:9.5,type:"Shared Apartment",amenities:["study","parking"],title:"Boitekong Rooms 9"},
      {id:10,price:3800,distance:4.0,type:"Studio Apartment",amenities:["study","parking","gym","security"],title:"Thlabane Halls 10"},
      {id:11,price:5500,distance:9.0,type:"Single Room",amenities:["parking","gym","study","wifi"],title:"Platinum Place 11"},
      {id:12,price:5100,distance:9.5,type:"Studio Apartment",amenities:["wifi","gym"],title:"Thlabane Halls 12"},
      {id:13,price:4100,distance:5.2,type:"Shared Room",amenities:["wifi","study","gym"],title:"Thlabane Halls 13"},
      {id:14,price:4600,distance:6.9,type:"Residence Hall",amenities:["gym","study","parking","wifi"],title:"Thlabane Halls 14"},
      {id:15,price:3600,distance:8.7,type:"Shared Room",amenities:["parking","laundry","wifi"],title:"Tlhabane West 15"},
      {id:16,price:3400,distance:8.8,type:"Studio Apartment",amenities:["gym","security","study"],title:"Waterval East 16"},
      {id:17,price:2700,distance:8.5,type:"Studio Apartment",amenities:["parking","study","wifi"],title:"Kroondal Student Lodge 17"},
      {id:18,price:4600,distance:5.2,type:"Single Room",amenities:["laundry","security","wifi"],title:"Springbok Residence 18"},
      {id:19,price:5100,distance:2.9,type:"Single Room",amenities:["laundry","gym","parking","security"],title:"Springbok Residence 19"},
      {id:20,price:1500,distance:2.5,type:"Shared Room",amenities:["wifi","laundry"],title:"Thlabane Halls 20"},
      {id:21,price:1800,distance:1.0,type:"Studio Apartment",amenities:["wifi","laundry"],title:"River Park Residence 21"},
      {id:22,price:2500,distance:8.0,type:"Single Room",amenities:["gym","security","wifi"],title:"Waterval East 22"},
      {id:23,price:5000,distance:0.4,type:"Studio Apartment",amenities:["wifi","study","gym","security"],title:"Boitekong Rooms 23"},
      {id:24,price:4700,distance:4.0,type:"Shared Room",amenities:["gym","study","wifi"],title:"Bafokeng Residence 24"},
      {id:25,price:5600,distance:2.7,type:"Shared Apartment",amenities:["laundry","study","gym","wifi"],title:"Bafokeng Residence 25"},
      {id:26,price:2600,distance:5.6,type:"Studio Apartment",amenities:["security","study","parking","laundry","wifi"],title:"Rustenburg Student House 26"},
      {id:27,price:3800,distance:4.1,type:"Single Room",amenities:["laundry","gym","security","study","wifi"],title:"Boitekong Rooms 27"},
      {id:28,price:4900,distance:9.5,type:"Shared Room",amenities:["wifi","parking","laundry"],title:"Rustenburg North 28"},
      {id:29,price:5500,distance:1.9,type:"Shared Apartment",amenities:["study","wifi"],title:"Springbok Residence 29"},
      {id:30,price:4700,distance:5.4,type:"Studio Apartment",amenities:["wifi","parking","study","laundry"],title:"Waterval East 30"},
      {id:31,price:4100,distance:7.8,type:"Single Room",amenities:["laundry","study","gym","parking"],title:"Platinum Place 31"},
      {id:32,price:3100,distance:9.7,type:"Residence Hall",amenities:["study","gym","wifi"],title:"Central Lofts 32"},
      {id:33,price:4300,distance:4.3,type:"Residence Hall",amenities:["study","security","gym","wifi"],title:"Olive Grove 33"},
      {id:34,price:4600,distance:8.4,type:"Studio Apartment",amenities:["gym","parking","security","wifi"],title:"Bafokeng Residence 34"},
      {id:35,price:3800,distance:2.2,type:"Shared Room",amenities:["gym","wifi","parking","security"],title:"Central Lofts 35"},
      {id:36,price:4700,distance:1.5,type:"Residence Hall",amenities:["security","parking","wifi"],title:"Rustenburg North 36"},
      {id:37,price:2100,distance:5.0,type:"Residence Hall",amenities:["study","wifi"],title:"Tlhabane West 37"},
      {id:38,price:4800,distance:1.1,type:"Studio Apartment",amenities:["wifi","laundry"],title:"River Park Residence 38"},
      {id:39,price:5600,distance:8.1,type:"Studio Apartment",amenities:["study","laundry"],title:"Rustenburg North 39"},
      {id:40,price:4600,distance:5.3,type:"Studio Apartment",amenities:["wifi","laundry","gym","study"],title:"Platinum Place 40"},
      {id:41,price:3100,distance:4.0,type:"Studio Apartment",amenities:["laundry","parking","wifi"],title:"Thlabane Halls 41"},
      {id:42,price:2300,distance:6.8,type:"Single Room",amenities:["security","parking","gym","wifi"],title:"Boitekong Rooms 42"},
      {id:43,price:5400,distance:9.2,type:"Single Room",amenities:["wifi","study"],title:"Geelhout Village 43"},
      {id:44,price:3000,distance:1.7,type:"Single Room",amenities:["study","security","wifi"],title:"Bafokeng Residence 44"},
      {id:45,price:1900,distance:4.8,type:"Shared Room",amenities:["gym","laundry","study","wifi"],title:"Geelhout Village 45"},
      {id:46,price:2400,distance:9.3,type:"Shared Apartment",amenities:["wifi","gym","laundry"],title:"Springbok Residence 46"},
      {id:47,price:1900,distance:6.8,type:"Shared Room",amenities:["security","wifi"],title:"Tlhabane West 47"},
      {id:48,price:4700,distance:4.6,type:"Studio Apartment",amenities:["study","gym","wifi","laundry"],title:"Central Lofts 48"},
      {id:49,price:2400,distance:2.2,type:"Residence Hall",amenities:["gym","security","wifi"],title:"Springbok Residence 49"},
      {id:50,price:4000,distance:3.3,type:"Shared Room",amenities:["security","parking","wifi"],title:"Rustenburg Student House 50"},
      {id:51,price:5900,distance:9.2,type:"Shared Apartment",amenities:["laundry","parking","wifi"],title:"Platinum Place 51"},
      {id:52,price:4900,distance:4.2,type:"Shared Room",amenities:["study","laundry","wifi"],title:"Boitekong Rooms 52"},
      {id:53,price:4900,distance:1.2,type:"Single Room",amenities:["laundry","study"],title:"Platinum Place 53"},
      {id:54,price:5000,distance:0.3,type:"Single Room",amenities:["gym","security","study","laundry","wifi"],title:"Platinum Place 54"},
      {id:55,price:3000,distance:4.5,type:"Studio Apartment",amenities:["study","security","wifi"],title:"Thlabane Halls 55"},
      {id:56,price:5900,distance:9.1,type:"Shared Room",amenities:["security","parking","laundry","wifi"],title:"Rustenburg North 56"},
      {id:57,price:5700,distance:7.0,type:"Shared Apartment",amenities:["security","laundry","wifi"],title:"Bafokeng Residence 57"},
      {id:58,price:2700,distance:2.3,type:"Single Room",amenities:["parking","gym","wifi"],title:"Olive Grove 58"},
      {id:59,price:5200,distance:9.7,type:"Residence Hall",amenities:["study","security","wifi"],title:"Rustenburg Student House 59"},
      {id:60,price:5000,distance:3.8,type:"Studio Apartment",amenities:["security","wifi"],title:"Thlabane Halls 60"},
      {id:61,price:1700,distance:2.6,type:"Shared Room",amenities:["gym","laundry","wifi"],title:"Boitekong Rooms 61"},
      {id:62,price:5300,distance:7.4,type:"Residence Hall",amenities:["laundry","study","security","wifi"],title:"Olive Grove 62"},
      {id:63,price:2000,distance:7.9,type:"Residence Hall",amenities:["laundry","wifi"],title:"Waterval East 63"},
      {id:64,price:5100,distance:2.6,type:"Studio Apartment",amenities:["laundry","parking","wifi"],title:"Olive Grove 64"},
      {id:65,price:1700,distance:8.9,type:"Single Room",amenities:["wifi","laundry","security","gym"],title:"Central Lofts 65"},
      {id:66,price:4200,distance:3.4,type:"Shared Room",amenities:["security","laundry","wifi"],title:"Rustenburg Student House 66"},
      {id:67,price:4100,distance:6.9,type:"Single Room",amenities:["laundry","study"],title:"Rustenburg North 67"},
      {id:68,price:6000,distance:0.9,type:"Shared Room",amenities:["gym","laundry","parking","study","wifi"],title:"Waterval East 68"},
      {id:69,price:5900,distance:1.8,type:"Single Room",amenities:["security","gym","laundry","wifi"],title:"Geelhout Village 69"},
      {id:70,price:3900,distance:9.5,type:"Studio Apartment",amenities:["parking","laundry"],title:"Olive Grove 70"},
      ];
      // each room takes the next photo from its type's list in room-images.js (loops when the list ends)
      const _used={};
      allRooms.forEach(r=>{
        const list=roomImages[r.type]||[];
        const i=_used[r.type]=(_used[r.type]??-1)+1;
        r.img=list.length?list[i%list.length]:'';
      });
      function applyFilters(){
      const priceMax=parseInt(document.getElementById('priceRange').value);
      const dist=parseFloat(document.querySelector('input[name="dist"]:checked').value);
      const types=[...document.querySelectorAll('.roomType:checked')].map(c=>c.value);
      const amenities=[...document.querySelectorAll('.amenity:checked')].map(c=>c.value);
      const sort=document.getElementById('sortSelect').value;
      let filtered=allRooms.filter(r=>{
      if(r.price>priceMax) return false;
      if(r.distance>dist) return false;
      if(types.length && !types.includes(r.type)) return false;
      if(amenities.length && !amenities.every(a=>r.amenities.includes(a))) return false;
      return true;
      });
      if(sort==='low') filtered.sort((a,b)=>a.price-b.price);
      if(sort==='high') filtered.sort((a,b)=>b.price-a.price);
      if(sort==='distance') filtered.sort((a,b)=>a.distance-b.distance);
      document.getElementById('applyBtn').innerText=`Apply Filters (${filtered.length})`;
      document.getElementById('resultsTitle').innerText=`${filtered.length} rooms near NWU Rustenburg Campus`;
      document.getElementById('resultsInfo').innerText=`Showing 1-${filtered.length} of ${filtered.length} results`;
      const container=document.getElementById('roomsContainer');
      if(filtered.length===0){container.innerHTML="<p style='padding:20px'>No rooms found. Clear filters.</p>";return;}
      container.innerHTML=filtered.map(room=>`
      <div class="room-card" data-id="${room.id}" tabindex="0">
      <img src="${room.img}" loading="lazy" alt="${room.type} - ${room.title}">
      <div class="room-info">
      <h3>R${room.price}/mo</h3>
      <p>${room.type} - ${room.title}</p>
      <small>${room.distance}km • ${room.amenities.join(', ')}</small>
      </div>
      </div>`).join('');
      }
      document.getElementById('priceRange').addEventListener('input',e=>{document.getElementById('priceValue').innerText=`R${e.target.value}`;});
      document.getElementById('applyBtn').addEventListener('click',applyFilters);
      document.getElementById('sortSelect').addEventListener('change',applyFilters);
      document.getElementById('clearAll').addEventListener('click',e=>{
      e.preventDefault();
      document.querySelectorAll('input[type=checkbox]').forEach(c=>c.checked=false);
      document.querySelector('input[name="dist"][value="100"]').checked=true;
      document.getElementById('priceRange').value=6000;
      document.getElementById('priceValue').innerText="R6000";
      applyFilters();
      });
      document.getElementById('resetBtn').addEventListener('click',()=>document.getElementById('clearAll').click());
      const hamburger=document.getElementById('hamburger');
      const navLinks=document.getElementById('navLinks');
      hamburger.addEventListener('click',()=>{navLinks.classList.toggle('show');});
      const profilePic=document.getElementById('profilePic');
      const profileInput=document.getElementById('profileInput');
      const savedPic=localStorage.getItem('getroom_profile_pic');
      if(savedPic){profilePic.src=savedPic;}
      profilePic.addEventListener('click',()=>{profileInput.click();});
      profileInput.addEventListener('change',e=>{
      const file=e.target.files[0];
      if(!file) return;
      const reader=new FileReader();
      reader.onload=ev=>{
      profilePic.src=ev.target.result;
      localStorage.setItem('getroom_profile_pic',ev.target.result);
      alert('Profile picture updated!');
      };
      reader.readAsDataURL(file);
      });
      document.getElementById('bellBtn').addEventListener('click',()=>{alert('You have 3 new notifications');});
      
      /* ===== ROOM DETAILS + BOOKING ===== */
      // NOTE: address, names and phone numbers below are SAMPLE data generated from the room id.
      // Replace getDetails() with your real data (or load it from PHP/MySQL) later.
      const streets=["Beyers Naude Dr","Nelson Mandela Dr","Klopper St","Tlhabane Rd","Boitekong Main Rd","Kroondal Rd","Church St"];
      const owners=["Mr T. Molefe","Mrs S. Dlamini","Mr J. van Wyk","Ms L. Mokoena","Mr P. Sithole","Mrs A. Botha","Ms N. Khumalo"];
      const labels={wifi:"Wi-Fi",study:"Study room / desk",laundry:"Laundry",parking:"Parking",security:"Security 24/7",gym:"Gym"};
      const bookingsKey='getroom_bookings';
      function getBookings(){try{return JSON.parse(localStorage.getItem(bookingsKey))||[];}catch(e){return [];}}
      function getDetails(r){
        const area=r.title.replace(/\s+\d+$/,'');
        const n=(r.id*37)%9000+1000;
        return {
          address:`${10+r.id*3} ${streets[r.id%streets.length]}, ${area}, Rustenburg, 0299`,
          owner:owners[r.id%owners.length],
          phone:`082 555 ${n}`,
          altPhone:`014 555 ${String(n+1111).slice(-4)}`,
          email:`${area.toLowerCase().replace(/\s+/g,'.')}${r.id}@getroom.example`,
          deposit:r.price,
          lease:"12 months (or semester lease)",
          available:"1 January 2027",
          about:`${r.type} at ${area}, about ${r.distance} km from NWU Rustenburg Campus. Ideal for students.`
        };
      }
      const modal=document.getElementById('roomModal');
      const modalBody=document.getElementById('modalBody');
      let currentRoom=null;
      function openRoom(id){
        const r=allRooms.find(x=>x.id===id); if(!r) return;
        currentRoom=r;
        const d=getDetails(r);
        const booked=getBookings().find(b=>b.roomId===r.id);
        document.getElementById('modalImg').src=r.img;
        document.getElementById('modalImg').alt=`${r.type} - ${r.title}`;
        document.getElementById('modalTitle').textContent=r.title;
        document.getElementById('modalPrice').textContent=`R${r.price}/mo`;
        document.getElementById('modalAbout').textContent=d.about;
        const rows=[
          ["Room type",r.type],["Address",d.address],["Distance to campus",`${r.distance} km`],
          ["Landlord / contact",d.owner],["Phone",d.phone],["Alt. phone",d.altPhone],["Email",d.email],
          ["Deposit",`R${d.deposit}`],["Lease",d.lease],["Available from",d.available]
        ];
        document.getElementById('modalDetails').innerHTML=rows.map(([k,v])=>`<div><span>${k}</span><b>${v}</b></div>`).join('');
        document.getElementById('modalAmenities').innerHTML=r.amenities.map(a=>`<li>${labels[a]||a}</li>`).join('');
        document.getElementById('bookingForm').reset();
        const u=window.GetRoomAuth&&GetRoomAuth.getUser();
        if(u){document.getElementById('fullName').value=u.name||'';document.getElementById('bookPhone').value=u.phone||'';document.getElementById('bookEmail').value=u.email||'';}
        document.getElementById('formError').textContent='';
        showBookingState(booked);
        modal.classList.add('open');
        document.body.style.overflow='hidden';
      }
      function showBookingState(booked){
        const form=document.getElementById('bookingForm');
        const bookBtn=document.getElementById('bookBtn');
        const msg=document.getElementById('bookedMsg');
        if(booked){
          form.style.display='none'; bookBtn.style.display='none';
          msg.style.display='block';
          msg.textContent=`✔ Booking request sent for ${booked.name}. Reference: ${booked.ref}. The landlord will contact you.`;
        } else {
          form.style.display='none'; bookBtn.style.display='block'; bookBtn.textContent='Book this room';
          msg.style.display='none';
        }
      }
      function closeRoom(){modal.classList.remove('open');document.body.style.overflow='';currentRoom=null;}
      document.getElementById('roomsContainer').addEventListener('click',e=>{
        const card=e.target.closest('.room-card'); if(card) openRoom(parseInt(card.dataset.id));
      });
      document.getElementById('roomsContainer').addEventListener('keydown',e=>{
        if(e.key==='Enter'){const card=e.target.closest('.room-card'); if(card) openRoom(parseInt(card.dataset.id));}
      });
      document.getElementById('closeModal').addEventListener('click',closeRoom);
      modal.addEventListener('click',e=>{if(e.target===modal) closeRoom();});
      document.addEventListener('keydown',e=>{if(e.key==='Escape'&&modal.classList.contains('open')) closeRoom();});
      document.getElementById('bookBtn').addEventListener('click',()=>{
        document.getElementById('bookingForm').style.display='block';
        document.getElementById('bookBtn').style.display='none';
        document.getElementById('fullName').focus();
      });
      // name must be at least two words (first + surname), letters only
      const nameRegex=/^[A-Za-zÀ-ÿ][A-Za-zÀ-ÿ'’-]+(\s+[A-Za-zÀ-ÿ][A-Za-zÀ-ÿ'’-]+)+$/;
      document.getElementById('bookingForm').addEventListener('submit',e=>{
        e.preventDefault();
        const err=document.getElementById('formError');
        const name=document.getElementById('fullName').value.trim().replace(/\s+/g,' ');
        const phone=document.getElementById('bookPhone').value.trim();
        const email=document.getElementById('bookEmail').value.trim();
        const moveIn=document.getElementById('moveIn').value;
        if(!nameRegex.test(name)){err.textContent='Please enter your correct full name (first name and surname, letters only).';return;}
        if(!/^(\+27|0)[0-9\s]{9,12}$/.test(phone)){err.textContent='Enter a valid phone number, e.g. 082 123 4567.';return;}
        if(!/^\S+@\S+\.\S+$/.test(email)){err.textContent='Enter a valid email address.';return;}
        if(!moveIn){err.textContent='Please choose a move-in date.';return;}
        const booking={ref:'GR'+Date.now().toString().slice(-6),roomId:currentRoom.id,room:currentRoom.title,price:currentRoom.price,name,phone,email,moveIn,date:new Date().toISOString()};
        const all=getBookings(); all.push(booking);
        try{localStorage.setItem(bookingsKey,JSON.stringify(all));}catch(ex){}
        err.textContent='';
        showBookingState(booking);
      });
      document.getElementById('moveIn').min=new Date().toISOString().split('T')[0];
            // room type typed on the home page search (e.g. "studio") pre-selects that filter
      const qParam=(new URLSearchParams(location.search).get('q')||'').toLowerCase();
      if(qParam){
        document.querySelectorAll('.roomType').forEach(c=>{
          if(qParam.includes(c.value.toLowerCase().split(' ')[0])) c.checked=true;
        });
      }
      applyFilters();
