    $( document ).ready(function() {
            var data = new FormData();
            data.append('listings','files list');
            $.ajax( {
                url: '../Upload',
                type: 'POST',
                data: data,
                processData: false,
                contentType: false,
                success: function(data) {
                    var response = jQuery.parseJSON(data);
                    if(response.code == "success") {
                        console.log("Success!");
                    } else if(response.code == "failure") {
                        console.log(response.err);
                    }
                    getList(response);

                }
            } );
    });
    $( window ).on( "load", function() {

    });
    function getList(a) {
        var ct = 0;
        for(var b in a["files"]){
            var tmp =a["files"][b];
            const name_only = tmp.split("/").slice(-1);
            var hlink = "<a href=\"https://pdm.pw/mine"+tmp+"\" class=\"ui-state-default ui-corner-all\" title=\"download\" download><span class=\"ui-icon ui-icon-circle-arrow-s\"></span> </a>";
            var file_table="<tr><th>"+name_only+"</th><th>"+
                a["ftimes"][tmp]
                +"</th><th>"+hlink+"</th></tr>";
            $("#filelist").append(file_table);
        }
    }
        