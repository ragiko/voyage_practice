$(function () {
    'use strict'
    var app = new Vue({
        el: '.list',
        data: {
            categories: [], 
            error: "",
        },
        ready: function(){
            this.getCategories();
        },
        methods: {
            getCategories: function(){
                // TODO: URI設計できたら書き換える
                var jqxhr = $.ajax({
                    url: './data/category.json',
                    context: this,
                    dataType: 'json',
                })
                .done(function(res){
                    console.log(res);
                    this.categories = res;
                })
                .fail(function(res){
                    this.error = 'error';
                });
                return jqxhr;
            },
        },
    })
});
