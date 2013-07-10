/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

var estimateModel =  {
    vehicleReg: "",
    dateCreated: new Date(),
    photos: new Array(),
    signatureData: {
        signature: "",
        name: "",
        accepted: false
    }
};

function storeCurrentEstimate() {
    window.localStorage.setItem("current_Estimate", JSON.stringify(estimateModel));
}

function getCurrentEstimate() {
    var estString = window.localStorage.getItem("current_Estimate");
    if (estString != undefined) {
        estimateModel = JSON.parse(estString);
    } else {
        getNewEstimate();
    }
}

function getNewEstimate() {
    estimateModel =  {
        vehicleReg: "",
        dateCreated: new Date(),
        photos: new Array(),
        signatureData: {
            signature: "",
            name: "",
            accepted: false
        }
    };
}

$(document).ready(function () {
    $('ul.nav > li.disabled > a').click(function () { return false; });
    $.ajaxSetup({ cache: false });
    $.support.cors = true;

});



