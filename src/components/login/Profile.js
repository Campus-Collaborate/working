import React, { useEffect, useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import {auth,db} from "../../firebaseConfig";

function profile(){
    return (
        <p>Welcome to your profile</p>
    )
}
export default profile;

