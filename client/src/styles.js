import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(()=>({

appBar: {
    borderRadius: 15,
    margin: '30px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    color: '#000000',
  },
  image: {
    marginLeft: '15px',
  },
  btn:{
    backgroundColor: "#33ccff",
    ":hower":{
      backgroundColor: "#3366ff",
      color: "#003366"
    },

  
    mainGrid:{
    width: "100%",
    height: "100%",
    overflow: "hidden",
    position: "relative",
},

    postGrid:{
      position: "absolute",
      top: "0",
      bottom: "0",
      left: "0",
      right: "-17px", /* Increase/Decrease this value for cross-browser compatibility */
      overflow: "scroll",
},
  

  },
}));
 