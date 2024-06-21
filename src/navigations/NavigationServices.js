import { createNavigationContainerRef } from "@react-navigation/native";

 const navigationRef = createNavigationContainerRef();

//function to create a navigation
 function navigate(name,params){
if(navigationRef.isReady()){
    navigationRef?.navigate(name,params)
}
};
//function for goback navigation
 function goBack(){
    if(navigationRef?.isReady()){
        navigationRef?.goBack()
    }
}
//function to reset and navigation
 function navigateAndReset(){
    if(navigationRef?.isReady()){
        navigationRef.resetRoot({
            index: 0,
            routes: [{ name: name, params: params }],
          });
    }
}

export default {
navigationRef,navigate,goBack,navigateAndReset
}

