import { LightningElement } from 'lwc';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';
import SONG_OBJECT from '@salesforce/schema/Song__c';
import NAME_FIELD from '@salesforce/schema/Song__c.Name';
import ALBUM_FIELD from '@salesforce/schema/Song__c.Album__c';
import ARTIST_FIELD from '@salesforce/schema/Song__c.Artists__c';
import DURATION_FIELD from '@salesforce/schema/Song__c.Duration__c';
import IMAGE_FIELD from '@salesforce/schema/Song__c.Image__c';
import SONGLINK_FIELD from '@salesforce/schema/Song__c.Song_link__c';


export default class UploadSong extends LightningElement {

    objectApiName=SONG_OBJECT;
    fields = [NAME_FIELD,ARTIST_FIELD,ALBUM_FIELD,DURATION_FIELD,SONGLINK_FIELD,IMAGE_FIELD];

    handleSuccess(event){
        const toastEvent=new ShowToastEvent({
            title:"Song uploaded successfully !",
            message: "Song Created ",
            variant: "success"
        });
        this.dispatchEvent(toastEvent);
    }
    
}