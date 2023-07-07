import { LightningElement } from 'lwc';
import{NavigationMixin} from "lightning/navigation";
export default class UploadButton extends NavigationMixin(LightningElement) {


    Handler1(){


      this[NavigationMixin.Navigate]({
    
        type:'comm__namedPage',
  
        attributes:{
  
          name: 'UploadSongSite__c',
   
        }
  
      });
  
    }


      //   this[NavigationMixin.Navigate]({
    
      //     type:'standard__component',
    
      //     attributes:{
    
      //       componentName: 'c__Navigator1',
     
      //     }
    
      //   });
    
      // }

}