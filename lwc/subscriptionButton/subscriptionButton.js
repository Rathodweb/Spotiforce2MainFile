import { LightningElement } from 'lwc';
import{NavigationMixin} from "lightning/navigation";

export default class SubscriptionButton extends NavigationMixin(LightningElement) {



    Handler(){


        this[NavigationMixin.Navigate]({
      
          type:'comm__namedPage',
    
          attributes:{
    
            name: 'Subscription__c',
     
          }
    
        });
    
      }
}