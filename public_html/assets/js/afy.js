var oldURL = "https://72.52.73.152/";  //url for website www.afypa.org
var tourSchoolURL = "https://goo.gl/sLeYW9";
var volunteerBooklet = "assets/docs/VOLUNTEER BOOKLET.pdf";
var CLIENT_ID = '100213111164-v8un5cp1i6r6tesr0cd1gsc4jc6t7evb.apps.googleusercontent.com';
var API_KEY = 'AIzaSyBuW_tArn70PeThSmTIDFNLyfSG_piFKQQ';
var SCOPES = 'https://www.googleapis.com/auth/drive';

var CARNIVAL_DATE = "10/15/2017";

$(document).ready(function () {



    /* <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->  */
    //$("head").append('<!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries --><!-- WARNING: Respond.js does not work if you view the page via file:// --><!--[if lt IE 9]><script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>//<script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script><![endif]-->');

    $("#footer-container").load("footer.html", function () {
        $("#year").text(new Date().getFullYear());
    });

    $("#nav-container").load("navigation.html", function () {
        var menu = ['home', 'about', 'photo', 'community', /*'resources',*/ 'shopping', 'contact'];
        $("#top-navbar-ul>li").removeClass("active");
        $.each(menu, function (index, value) {
            //alert(index + ": " + value);
            if ($($('.navbar')).hasClass(value)) {
                $($("#top-navbar-ul>li")[index]).addClass("active");
            }
        });
    });


});

jQuery.fn.extend({
    loadDonate: function () {
        $("#donation-container").load("callToDonation.html");
    },
    equalHeightFor: function (selectorChild) {
        var diff = 0;
        $(this).each(function (index) {
            if (index > 0) {
                $(this).find(selectorChild).css('height', diff - $(this).innerHeight() + $(this).find(selectorChild).innerHeight() + 'px');
            } else {
                diff = $(this).innerHeight();
            }

        });
    },
    equalHeightMax: function () {
        var max = 0;
        $(this).each(function () {
            var h = $(this).innerHeight();
            if (max < h) {
                max = h;
            }
        });

        $(this).each(function (index) {
            $(this).css('height', max + 'px');
        });

    },
    loadURL: function (location) {
        window.open(location);
        return false;
    },
    defineFileTypeForFontawesome: function (fileName) {
        //console.log("defineFileTypeForFontawesome:   fileName="+fileName);
        var fileAttr = fileName.split('.');
        var fileExtension = fileAttr[fileAttr.length - 1];
        var fileType = 'file';
        console.log("defineFileTypeForFontawesome:   fileExtension=" + fileExtension);
        switch (fileExtension) {
            case 'docx':
            case 'doc':
            case 'txt':
                fileType = "file-word";
                break;
            case 'pdf':
                fileType = "file-pdf";
                break;
            case 'wav':
            case 'mp3':
            case 'fla':
            case 'flac':
            case 'ra':
            case 'rma':
            case 'aif':
            case 'aiff':
            case 'aa':
            case 'aac':
            case 'aax':
            case 'ac3':
            case 'au':
            case 'ogg':
            case 'avr':
            case '3ga':
            case 'mid':
            case 'midi':
            case 'm4a':
            case 'mp4a':
            case 'amz':
            case 'mka':
            case 'asx':
            case 'pcm':
            case 'm3u':
            case 'wma':
            case 'xwma':
                fileType = "file-audio";
                break;
            case 'xls':
            case 'xlsx':
                fileType = "file-excel";
                break;
            case 'ppt':
            case 'pptx':
                fileType = "file-powerpoint";
                break;
            case 'gif':
            case 'jpg':
            case 'jpeg':
            case 'png':
            case 'bmp':
            case 'tif':
                fileType = "file-image";
                break;

            case 'avi':
            case 'mpg':
            case 'mp4':
            case 'mkv':
            case 'mov':
            case 'wmv':
            case 'vp6':
            case '264':
            case 'vid':
            case 'rv':
            case 'webm':
            case 'swf':
            case 'h264':
            case 'flv':
            case 'mk3d':
            case 'gifv':
            case 'oggv':
            case '3gp':
            case 'm4v':
            case 'movie':
            case 'divx':
                fileType = "file-video";
                break;

            case 'css':
            case 'js':
            case 'py':
            case 'git':
            case 'py':
            case 'cpp':
            case 'h':
            case 'ini':
            case 'config':
                fileType = "file-code";
                break;

            case 'zip':
            case 'zipx':
            case 'rar':
            case 'tar':
            case 'gz':
            case 'dmg':
            case 'iso':
                fileType = "file-archive";
                break;
            default:
                fileType = "file";
        }
        console.log("defineFileTypeForFontawesome:   fileType=" + fileType);
        return fileType;
    },
    listGoogleDocsFiles: function (containerID, dirID) {
        //console.log('listGoogleDocsFiles');
        $(this).listGoogleDocsFilesJSON(dirID, 100, function (response) {
            var files = response.files;
            //console.log('files');

            if (files && files.length > 0) {
                var rows = '<div class="row underline">' +
                        '<div class="col-sm-4 services-full-width-text wow fadeInLeft"><h3>&nbsp;&nbsp;&nbsp;&nbsp;TITLE&nbsp;&nbsp;&nbsp;&nbsp;</h3></div>' +
                        '<div class="col-sm-4 services-full-width-text wow fadeInLeft"><h3>LAST MODIFIED&nbsp;&nbsp;</h3></div>' +
                        '<div class="col-sm-4 services-full-width-text wow fadeInLeft"><h3>MODIFIED BY&nbsp;&nbsp;</h3></div>' +
                        '</div>';
                for (var i = 0; i < files.length; i++) {
                    var file = files[i];

                    rows += '<div class="row underline">' +
                            '<div class="col-sm-4 presentation-container1 wow fadeInLeft"><p><a class="big-link-2 tour" href="https://drive.google.com/file/d/' + file.id +
                            '/view?usp=drive_web" target="_blank" id="' + file.name + '"><i class="fas fa-' + $(this).defineFileTypeForFontawesome(file.name) + '"></i></a>&nbsp;&nbsp;&nbsp;&nbsp;' + file.name + '&nbsp;&nbsp;</p></div>' +
                            '<div class="col-sm-4 presentation-container1 wow fadeInLeft"><p>' + $.format.date(file.createdTime, "MMM  d  yyyy") + '&nbsp;&nbsp;</p></div>' +
                            '<div class="col-sm-4 presentation-container1 wow fadeInLeft"><p>' + file.lastModifyingUser.displayName + '&nbsp;&nbsp;</p></div></div>';
                }

                $("#" + containerID).html(rows);

            } else {
                $("#" + containerID).html('No files found.');
            }
        });
    },
    createLinkToNewestFile: function (dirID, hrefID) {
        //console.log("createLinkToNewestFile");
        $(this).listGoogleDocsFilesJSON(dirID, 1, function (response) {
            var files = response.files;
            if (files && files.length > 0) {
                $('#' + hrefID).attr('href', 'https://drive.google.com/file/d/' + files[0].id + '/view?usp=drive_web').attr('target', '_blank');
            }
        });
    },
    listGoogleDocsFilesJSON: function (dirID, numOfFiles, funcResponse) {
        //console.log("listGoogleDocsFilesJSON");
        /*var url = "https://www.googleapis.com/drive/v3/files?orderBy=folder+desc%2CcreatedTime+desc%2C+name+&pageSize=" + 
         numOfFiles + "&q='" + dirID + "'+in+parents&fields=files%2CincompleteSearch%2Ckind%2CnextPageToken&key=" + API_KEY;*/


        var url = "https://www.googleapis.com/drive/v3/files?orderBy=folder+desc%2CcreatedTime+desc%2Cname&pageSize=100&q='" + dirID +
                "'+in+parents&fields=files(contentHints%2CcreatedTime%2Cdescription%2CexplicitlyTrashed%2CfileExtension%2CfolderColorRgb%2C" +
                "fullFileExtension%2ChasAugmentedPermissions%2ChasThumbnail%2CheadRevisionId%2CiconLink%2Cid%2CimageMediaMetadata%2CisAppAuthorized%2C" +
                "kind%2ClastModifyingUser%2Cmd5Checksum%2CmimeType%2CmodifiedByMe%2CmodifiedByMeTime%2CmodifiedTime%2Cname%2CoriginalFilename%2C" +
                "ownedByMe%2Cowners%2Cparents%2CpermissionIds%2Cpermissions%2Cproperties%2CquotaBytesUsed%2Cshared%2CsharedWithMeTime%2CsharingUser%2C" +
                "size%2Cspaces%2Cstarred%2CteamDriveId%2CthumbnailLink%2CthumbnailVersion%2Ctrashed%2CtrashedTime%2CtrashingUser%2Cversion%2C" +
                "videoMediaMetadata%2CviewedByMe%2CviewedByMeTime%2CviewersCanCopyContent%2CwebContentLink%2CwebViewLink%2CwritersCanShare)&key=" + API_KEY;


        /* The setup
         *  
         *  Generate the public URL. Go to: https://developers.google.com/apis-explorer/?hl=en_GB#p/drive/v3/drive.files.list
         
         In the 'q' field enter the following:
         
         '{your_public_folder_id}' in parents
         Click the "Execute without OAuth" link underneath the button.
         
         You should now see all your files listed underneath. It also show you the GET request. That is the URL you will need.
         
         Copy the Request URL. Something like: https://www.googleapis.com/drive/v3/files?q='{your_public_folder_id}'+in+parents&key={YOUR_API_KEY}
         
         Now, you will need to generate the API key. Go to Google Console: https://console.developers.google.com/ In left menu select 'Credentials'. Click 'Create credentials' and select API key. Click 'Browser key' Copy the generate key.
         */

        $.getJSON(url, funcResponse).done(function () {
            console.log("Second Success");
        }).fail(function () {
            console.log("Request Failed");
        }).always(function () {
            console.log("Request Complete");
        });

    },
    dontShowAfterDate: function (containerID, dateString/* MM/DD/YYYY  */) {
        var dtrue = Date.compare(Date.today(), Date.parse(dateString));
        //console.log((dtrue == 1) ? 'in the past' : 'in the future');
        (dtrue == 1) ? $('#' + containerID).hide() : $('#' + containerID).show();
    },
    readGoogleSheet: function (fileID, funcResponse) {
        //console.log('readGoogleSheet fileId =' + fileId);
        var lastCell = 'F1000';
        var url = 'https://sheets.googleapis.com/v4/spreadsheets/' + fileID + '/values/A1%3A' + lastCell + '?key=' + API_KEY;

        //https://sheets.googleapis.com/v4/spreadsheets/1laHY85YHc5zP_93BHeGfiObuduuBXN-sEBI4NhgFo1s/values/A1%3AB1000?key={YOUR_API_KEY}
        $.getJSON(url, funcResponse).done(function () {
            console.log("Second Success");
        }).fail(function () {
            console.log("Request Failed");
        }).always(function () {
            console.log("Request Complete");
        });
    },
    listImageFromGoogleSheet: function (containerID, fileID) {
        //console.log('listImageFromGooglesheet');
        $(this).readGoogleSheet(fileID, function (response) {
            var values = response.values;

            if (values && values.length > 0) {
                var i = 0;
                var dataArray = [];
                //remove empty lines
                while (i < values.length) {
                    if (values[i] && values[i][0] && values[i][0].length > 0) {
                        dataArray.push(values[i]);
                    }
                    i++;
                }

                var rows = '';
                i = 0;

                while (i < 3 * Math.floor(dataArray.length / 3)) {
                    rows += '<div class="row">' +
                            $(this).createGrapicCell(dataArray[i++]) +
                            $(this).createGrapicCell(dataArray[i++]) +
                            $(this).createGrapicCell(dataArray[i++]) +
                            '</div>';
                }
                var restOfCells = dataArray.length - Math.floor(dataArray.length / 3);
                if (restOfCells == 1) {
                    rows += '<div class="row">' +
                            $(this).createGrapicCell(dataArray[i]) +
                            '</div>';
                } else {
                    rows += '<div class="row">' +
                            $(this).createGrapicCell(dataArray[i++]) +
                            $(this).createGrapicCell(dataArray[i]) +
                            '</div>';
                }

                $("#" + containerID).html(rows);

            } else {
                $("#" + containerID).html('No sponsors found.');
            }
        });
    },
    createGrapicCell: function (data) {
        //console.log(data);
        var cell = '';
        if (data && data.length > 0) {
            var businessName = data[0];

            if (typeof businessName !== "undefined" && businessName !== null && businessName.trim().length > 0) {

                var businessHref = ($(this).validateEmail(data[1])) ? 'mailto:' + data[1] : data[1];
                var logoDiv = '';

                if (data[5])
                    logoDiv = '<div><img  class="logoImage1" src="https://drive.google.com/uc?export=view&id=' + data[5] + '"><br/></div>';
                else if (data[2]) {
                    var inlineCSS = (data[3]) ? ' style="' + data[3] + '" ' : '';
                    logoDiv = '<div><img class="logoImage" src="' + data[2] + '" ' + inlineCSS + '><br/></div>';
                } else if (data[4])
                    logoDiv = '<div><p style="' + data[3] + '">' + data[4] + '</p></div>';
                else
                    logoDiv = '<div></div>';


                cell = '<div class="col-sm-4">' +
                        '<div class="service wow fadeInUp h3Height">' +
                        '<h3>' + businessName + '</h3>' +
                        logoDiv +
                        '<br/><p><a  href="' + businessHref + '" target="_blank" id="' + businessName + '">' + data[1] + '</a></p>' +
                        '</div>' +
                        '</div>';
            }
        }

        return cell;
    },
    validateEmail: function (email) {
        var pattern = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
        return $.trim(email).match(pattern) ? true : false;

    }
});




