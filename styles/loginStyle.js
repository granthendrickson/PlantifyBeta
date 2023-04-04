import {ImageBackground, StyleSheet} from "react-native";
export default StyleSheet.create({
    loginPage: { 
        flex: 1,
        backgroundColor: "#FFF7E9",
    },
    loginContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },  
    loginBox:{
        zIndex: 90,
        borderWidth: 1,
        borderColor: "#FFFFFF",
        borderRadius: 30,
        padding: 30,
        alignSelf: "center",
        backgroundColor: '#FFFFFF',
    },
    loginHeader: {
        
    },
    plantifyHeader: {
        fontFamily: 'Kabel-Black',
        fontStyle: 'normal',
        fontWeight: '900',
        fontSize: 24,
        textAlign: 'center', 
        color: '#385250',
        marginBottom: 10,
    },
    headerSubtext: {
        fontFamily: 'Josefin Sans',
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: 14,
        textAlign: 'center',
        color: '#000000',
        marginBottom: 30,
    },
    backgroundImage:{
        flex:1,
        resizeMode: "stretch",
    },
    emailInput: {
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 10,
        padding: 5,
        marginBottom: 10,
    },
    passwordInput: {
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 10,
        padding: 5,
        marginBottom: 40,
    },
    loginButton: {
        backgroundColor: '#385250',
        borderRadius: 20,
        padding: 10,
        marginBottom: 20,
    },
    loginText: {
        alignSelf: "center",
        fontFamily: 'Kabel-Black',
        fontStyle: "normal",
        fontWeight: 900,
        fontSize: 24,
        color: 'white',
    },
    loginLink: {
        alignSelf: "center",
        
    },
})  