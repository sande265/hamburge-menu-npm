#Hamburger Menu

This is a package for Having a 3 dot vertical or hamburger menu.




 Options Array Structure
 options: [
     {
          name: "" | String, Required
          icon: "" | String, Optional
          callback: () => {} | Function, Optional
      }
      or 
      For predefined values, "view", "delete", "edit"
 ],
 Callback is directly assotiated with Delete Option,
 History is only accessible when parent props are passed to the component as {...props} or {...this.props}
 children are the items enclosed in the component & require no additional params.