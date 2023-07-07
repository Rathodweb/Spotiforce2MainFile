public with sharing class SongsList {
    @AuraEnabled(cacheable=true)
    public static List<Song__c> getSongs(String searchKey) {      
       
        if(searchKey!='')
        {
            String key = '%'+searchKey+'%';
            List<Song__c> searchSongList = [SELECT Name,Image__c,Duration__c,Artists__r.Name,Album__r.Name,Song_link__c FROM Song__c 
            WHERE Name LIKE : key ];
            return searchSongList;
        }
        else {
            
              List<Song__c> listOfSong = [SELECT Name,Image__c,Duration__c,Artists__r.Name,Album__r.Name,Song_link__c FROM Song__c 
              WITH SECURITY_ENFORCED];
                     
                return listOfSong;
         } }
}
