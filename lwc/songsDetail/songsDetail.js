import { LightningElement } from 'lwc';
import getSong from '@salesforce/apex/SongsList.getSongs';

export default class SongsDetail extends LightningElement {

songs;
error;
searchTerm='';
isSearchNOTAvailable = false;

connectedCallback() {

   this.loadSongs(this.searchTerm);
}




handleSearchTerm(event)
{

this.searchTerm = event.target.value;
this.loadSongs(this.searchTerm);
}





  loadSongs(searchTerm)
  {
    getSong({searchKey:searchTerm})
    .then(result=>{
            this.songs = result;
            console.log("this.songs:"+JSON.stringify(this.songs));

            // //////////////---------if we search in search bar if no songs available then we have to show no songs----------///////////////////////
            if(this.songs.length > 0)
            {
                this.isSearchNOTAvailable=false;
            }
            else{
                this.isSearchNOTAvailable =true;
            }
       

        })
        .catch(error => {
            this.isSearchNOTAvailable=false;
            this.error = error;
        })
  }
   


}