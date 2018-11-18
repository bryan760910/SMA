var RederTable = function(options){

    var _defaultOptions = {
        data: {},
        showInMobile : false,

    },
    _siteMap = {
        tableHTML : '<table class="table table-bordered">' +
            '<thead>' +
            '</thead>' +
            '<tbody>' +
            '</tbody>' + 
        '</table>',
        mobileHTML : '<table class="table table-bordered">' +
            '<thead>' +
            '</thead>' +
            '<tbody>' +
            '</tbody>' + 
        '</table>',
    },
    
    _self = this,
    _options = $.extend({}, _defaultOptions, {}, options),

    // _arrangeData = function(){
    //     var sourceData = _options.data;

    // },

    renderTableHTML = function(){
        var $table = $(_siteMap.tableHTML)
        var $thead = $table.find("thead");
        var $tbody = $table.find("tbody");
        var sourceData = _options.data;
        var $tr = $("<tr></tr>");
        var $th = $("<th></th>");
        $tr.append($th);
        $.each(_options.data.titles.Htitle, function(index, items){
            $th = $('<th scope="col"></th>');
            $th.text(items);
            $tr.append($th);
        });
        $thead.append($tr)

        $.each(_options.data.content, function(index, items){
            var $tr = $("<tr></tr>");
            var $th = $("<th scope='row'></th>").text(_options.data.titles.Vtitle[index]);
            $tr.append($th);
            $.each(items, function(idx, itms){
                $td = $("<td></td>");
                $td.text(itms)
                $tr.append($td)
            });
            $tbody.append($tr);
        });

        return $table[0];
    };

    renderMobileTableHTML = function(){
        var $table = $(_siteMap.mobileHTML)
        var $thead = $table.find("thead");
        var $tbody = $table.find("tbody");
        var sourceData = _options.data;
        var $tr = $("<tr></tr>");
        var $th = $("<th></th>");
        $tr.append($th);
        $.each(_options.data.titles.Vtitle, function(index, items){
            $th = $('<th scope="col"></th>');
            $th.text(items);
            $tr.append($th);
        });
        $thead.append($tr)

        $.each(_options.data.content, function(index, items){
            var $tr = $("<tr></tr>");
            var $th = $("<th scope='row'></th>").text(_options.data.titles.Htitle[index]);
            $tr.append($th);
            $.each(items, function(idx, itms){
                $td = $("<td></td>");
                $td.text(_options.data.content[idx][index])
                $tr.append($td)
            });
            $tbody.append($tr);
        });

        return $table[0];
    }

    return {
        "renderTableHTML"       : renderTableHTML,
        "renderMobileTableHTML" : renderMobileTableHTML
    }



}