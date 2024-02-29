// ==UserScript==
// @name         Aternos Enhanced
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Enchance your aternos website!
// @author       aceinet
// @match        https://aternos.org/*
// @grant GM_setValue
// @grant GM_getValue
// @require https://code.jquery.com/jquery-3.6.0.min.js
/* globals jQuery, $, waitForKeyElements */
// ==/UserScript==

/*(function($) {
    //'use strict';
    $(".QfUrVYMsDYol").click()
})()

$(document).ready(function($) {
$(".QfUrVYMsDYol").click()
})
*/

(function() {

    console.log(window.location.href)
    //$(".QfUrVYMsDYol").click()
    /*
    <div class="header-center">

        <a href="/software" class="btn btn-green btn-small">
                            <i class="fa fa-random"></i><span class="btn-text">  Exaroton style</span>
                        </a>


    <a href="/software" class="btn btn-green btn-small">
                            <i class="fa fa-random"></i><span class="btn-text">  Aternos style</span>
                        </a></div>
    */
    $(".userlinks").append('<span title="Aternos enhanced style" class="style_label"> Aternos style</span>')
    if(GM_getValue("aternosStyle") == undefined){
        GM_setValue("aternosStyle", "aternos")
    }

    if(window.location.href != "https://aternos.org/files/server.properties"){
        GM_setValue("fileSettings", "0")
    }

    
    $(".QfUrVYMsDYol").click()
    $(".QfUrVYMsDYol").html("Continue")
    $(".QfUrVYMsDYol").css({ display: 'none' })
    $(".ad-replacement").remove()
    $(".ad-label").remove()
    $(":root").css({
        //"--color-main": "#2bd393"
    })
    $(".btn-help").remove()
    $(".header-link-exaroton").remove()
    $("img[src$='/panel/img/logo-white.svg']").remove()
    $(".fa-sad-tear").remove()
    $(".fas").css({
        //display: 'none'
    })
    $("*[class*='warn']").remove()
    $(".timezone-switch").append("<label></label>")
    $(".timezone-switch").append("<label></label>")
    $(".timezone-switch").append("<label></label>")
    $(".timezone-switch").append("<label></label>")
    $(".timezone-switch").append("<label>Aternos Enhanced by aceinet</label>")
    $('.filename').each(function () {
        if(this !== undefined){
            let text = this.innerHTML
            if(text.indexOf("ContentLog") >= 0) {
                this.innerHTML = text.replace("ContentLog__", "Content log: ").replaceAll("_", " ").replaceAll(".txt", "")
                this.style = "color: var(--color-main)";
            }
        }
    });

    if(window.location.href == "https://aternos.org/enhanced"){
        $(".console").remove()
        $(".console-wrapper").remove()
        $("body").append(`
<h1>Aternos Enhanced by Aceinet</h1>
<h2>-- Settings --</h2>
<h3 class="stylelabel2">Style ()</h3>
<button class="exastyle">Exatoron style</button>
<button class="aternostyle">Aternos style</button>
<h2>-- Credits --</h2>
<h3>       Aternos Enhanced</h3>
<h3>Made by Aceinet 2022-present</h3>

<style>
button {
color: blue
}
</style>
`)
        $("title").remove()
        $("head").append("<title>Aternos Enhanced</title>")
    }

    if(GM_getValue("aternosStyle") == "exaroton"){
        $(":root").css({
            "--color-main": "#2bd32d"
        })
        $(".style_label").html("Exaroton style")
        $(".stylelabel2").html("Style (Exaroton)")
    } else {
        $(":root").css({
            "--color-main": "#2b87d3"
        })
        $(".stylelabel2").html("Style (Aternos)")
    }

    let total_size = 0
    let size_bytes = 1
    let size_label = "B"
    $('.filesize').each(function () {
        if(this !== undefined){
            let text = this.innerHTML
            if(text.indexOf(" B") >= 0){
                total_size += parseFloat(text)
            } else if(text.indexOf(" kB") >= 0){
                if(size_bytes < 1024){
                    size_bytes = 1024
                    size_label = "kB"
                }
                total_size += parseFloat(text)*1024
            } else if(text.indexOf(" MB") >= 0){
                if(size_bytes < 1048576){
                    size_bytes = 1048576
                    size_label = "MB"
                }
                total_size += parseFloat(text)*1048576
            }
        }
    });
    // <i class="fas fa-file-invoice"></i>
    // <span class="file-total-size">dwa</span>
    if(total_size != 0){
        $(".files-folder-count").append('<i class="fas fa-file-invoice"></i><span class="file-total-size"></span>')
        $(".file-total-size").html(""+(total_size/size_bytes).toFixed(2)+" "+size_label)
    }
    //config-option-output-value

    $(".config-option-output-value:contains('true')").css({
        color: "green"
    })
    $(".config-option-output-value:contains('false')").css({
        color: "red"
    })
    $("a[title$='Настройки']").attr("href", "https://aternos.org/files/server.properties")
    $("a[title$='Настройки']").on("click", function(){
        GM_setValue("fileSettings", "1")
    })
    if(window.location.href == "https://aternos.org/files/server.properties"){
        if(GM_getValue("fileSettings") == "1"){
            $("h1:contains('Файлы')").remove()
            $(".path-bar").remove()
        }
    }

    //$(".centertext-text").html("Welcome to Aternos Enhanced!")
    $(".splash-menu").append('<div><a>Aternos Enhanced loaded</a></div>')
    $(".server-b-tutorials").remove()
    $("div[style*='display: flex; height: 99.99628vh']").css({ background: "#2D3943" })
    $("div[style*='dVDfPRs: gwtAHQywsSrLENTM; ZKIoVraBzE: t; KdYipfIBusnzf: bmIcJ; jQrzvzfLvOcexm: JQpLQJhDaobSWwy; huDWVlPYAXw: yriaDwAUkQKssDY; ']").remove()
    $("span[pogjmph$='fLNkU']").remove()
    $('div[style*="maqSyylleUKbd: VTYTVHMNo"]').remove()
    $('a[href*="https://support.aternos.org/hc/articles/360034748092"]').remove()
    $('div[hl*="vGKCIwSqzTWq"]').remove()
    $(".header-start").remove()
    $(".header-center").remove()
    $(".header-right").toggleClass('header-right header-start')
    $(".header").append(`<div class="header-center"><a class="btn btn-green btn-small enhanced_page"><i class="fa fa-cogs exastyle"></i><span class="btn-text exastyle">  Aternos Enhanced</span></a> <a class="btn btn-green btn-small exastyle"><i class="fa fa-random exastyle"></i><span class="btn-text exastyle">  Exaroton style</span></a><a class="btn btn-green btn-small aternostyle"><i class="fa fa-random aternostyle"></i><span class="btn-texl aternostyle">  Aternos style</span></a></div>`)
    $(".exastyle").on("click", function(){
        $(":root").css({
            "--color-main": "#2bd32d"
        })
        GM_setValue("aternosStyle", "exaroton")
        $(".style_label").html("Exaroton style")
        $(".stylelabel2").html("Style (Exaroton)")
    });$(".enhanced_page").on("click", function(){
        window.location.href = "https://aternos.org/enhanced"
    });
    $(".aternostyle").on("click", function(){
        $(":root").css({
            "--color-main": "#2b87d3"
        })
        GM_setValue("aternosStyle", "aternos")
        $(".style_label").html("Aternos style")
        $(".stylelabel2").html("Style (Aternos)")
    });
})()
