export const newsletterTemplate = name => {
  return `
        <!DOCTYPE html>

            <html lang="en" xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:v="urn:schemas-microsoft-com:vml">

            <head>
                <title></title>
                <meta content="text/html; charset=utf-8" http-equiv="Content-Type" />
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
                <!--Dark Mode meta tags needed to enable Dark Mode in email client user agents-->
                <meta name="color-scheme" content="dark only"/>
                <meta name="supported-color-schemes" content="dark only"/>
                <!--[if mso]><xml><o:OfficeDocumentSettings><o:PixelsPerInch>96</o:PixelsPerInch><o:AllowPNG/></o:OfficeDocumentSettings></xml><![endif]-->
                <!--[if !mso]><!-->
                <style>
                    @font-face {
                        font-family: 'Gotham-book';
                        font-weight: 400;
                        font-style: normal;
                        src: url('https://fls-group.com/fonts/Gotham/GothamBook.ttf') format('ttf');
                    }

                </style>
                <!--<![endif]-->
                <style>
                    :root {
                        color-scheme: dark only;
                        supported-color-schemes: dark only;
                    }
                    * {
                        box-sizing: border-box;
                    }
                    p {
                        font-family: 'Gotham-book', 'Verdana' !important;
                        font-weight: 500 !important;
                    }

                    body {
                        margin: 0;
                        padding: 0;
                    }
                    .body, .darkmode, .darkmode div {
                        background-image: linear-gradient(#ffffff,#ffffff) !important;
                    }
                    .darkmode p {
                        -webkit-text-fill-color: #ffffff !important;
                    }
                    a[x-apple-data-detectors] {
                        color: inherit !important;
                        text-decoration: inherit !important;
                    }

                    #MessageViewBody a {
                        color: inherit;
                        text-decoration: none;
                    }

                    p {
                        line-height: inherit
                    }

                    .desktop_hide,
                    .desktop_hide table {
                        mso-hide: all;
                        display: none;
                        max-height: 0px;
                        overflow: hidden;
                    }
                    .footer-content {
                        width: 100vw;
                    }
                    .image_block img+div {
                        display: none;
                    }
                    .email-text {  
                        color: #ffffff !important; 
                    }
                    @media (prefers-color-scheme: dark) {
                        :root {
                            --special-text-color: #ffffff;
                            --border-color: white;
                        }
                        .email-text {
                            color: #ffffff !important;
                        }
                    }
                    .space {
                        display: none !important; 
                    }
                    .anchor-text, .line {
                        height: 9.5px !important;
                    }
                    .anchor-text img, .line img {
                        height: 9.5px !important;
                    }
                    .warehousing {
                        hieght: 9.5px !important;
                        width: 21% !important;
                    }
                    .warehousing img {
                        width: 115px !important;
                        height: 9.5px !important;
                    }
                    @media (max-width: 620px) {
                        .anchor-text img {
                            width: 12vw !important;
                        }
                        .warehousing {
                            width: 10vw !important;
                        }
                        .email-text {
                            color: #808080 !important;
                        }
                        .space {
                            display: block !important;
                            width: 2vw !important;
                        }
                        .footer-content {
                            width: 100vw;
                        }
                        .line {
                            display: none !important;
                        }
                        .letter-wrapper {
                            width: 78vw !important;
                        }
                        .nl-container {
                            width: 760px !important;
                        }
                        .nav {
                            max-width: 78vw !important;
                            width: 78vw !important;
                        }
                        .fullWidth {
                            max-width: 78vw !important;
                            width: 78vw !important;
                        }
                        .letter {
                            width: 78vw !important;
                        }
                        .desktop_hide table.icons-inner,
                        .social_block.desktop_hide .social-table {
                            display: inline-block !important;
                        }

                        .icons-inner {
                            text-align: center;
                        }

                        .icons-inner td {
                            margin: 0 auto;
                        }

                        .image_block div.ful lWidth {
                        }

                        .mobile_hide {
                            display: none;
                        }

                        .row-content {
                            width: 78vw !important;
                        }

                        .stack .column {
                            width: 100%;
                            display: block;
                        }

                        .nav .column img {
                            width: auto !important;
                            height: 12px !important;
                            margin-bottom: 5px;
                        }

                        .mobile_hide {
                            min-height: 0;
                            max-height: 0;
                            max-width: 0;
                            overflow: hidden;
                            font-size: 0px;
                        }

                        .desktop_hide,
                        .desktop_hide table {
                            display: table !important;
                            max-height: none !important;
                        }
                        .row-12 {
                            width: 100%;
                            padding: 0 !important;
                        }
                        .row-3 .column-1 .block-2.image_block td.pad {
                            padding: 0 40px !important;
                        }

                        .row-3 .column-1 .block-1.spacer_block {
                            height: 25px !important;
                        }

                        .row-4 .column-1 .block-1.spacer_block {
                            height: 15px !important;
                        }

                        .row-5 .column-1 .block-1.paragraph_block td.pad>div {
                            font-size: 14px !important;
                        }

                        .row-5 .column-1 .block-1.paragraph_block td.pad {
                            padding: 30px 30px 30px 40px !important;
                        }

                        .row-5 .column-1 {
                            padding: 0 !important;
                        }
                    }
                </style>
            </head>

            <body class="body" style="margin: 0; padding: 0; -webkit-text-size-adjust: none; text-size-adjust: none;">
                <span class="preheader" style="display: none !important; visibility: hidden; opacity: 0; color: transparent; height: 0; width: 0;"> Thank you for subscribing to our newsletter and joining our community. Our
                subscription aligns you with a network of global enthusiasts and world
                movers.</span>
                <table border="0" cellpadding="0" cellspacing="0" class="nl-container" role="presentation"
                    style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-image: url('http://fls.saigondigitaldev.com/wp-content/uploads/2023/12/BG-Main-scaled.jpg'); background-position: top left; background-size: 100% 100%; background-repeat: no-repeat; margin: 0 auto;"
                    width="80%">
                    <tbody>
                        <tr>
                            <td>
                                <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-1"
                                    role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-size: auto;"
                                    width="100%">
                                    <tbody>
                                        <tr>
                                            <td>
                                                <table align="center" border="0" cellpadding="0" cellspacing="0"
                                                    class="row-content stack" role="presentation"
                                                    style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-size: auto; width: 600px; margin: 0 auto;"
                                                    width="600">
                                                    <tbody>
                                                        <tr>
                                                            <td class="column column-1"
                                                                style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-top: 50px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
                                                                width="100%">
                                                                <table border="0" cellpadding="0" cellspacing="0"
                                                                    class="image_block block-1" role="presentation"
                                                                    style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
                                                                    width="100%">
                                                                    <tr>
                                                                        <td class="pad"
                                                                            style="width:100%;padding-right:0px;padding-left:0px;">
                                                                            <div align="center" class="alignment"
                                                                                style="line-height:10px">
                                                                                <div style="max-width: 180px;">
                                                                                    <a href="https://fls-group.com/"><img alt="FLS Logo"
                                                                                    src="http://fls.saigondigitaldev.com/wp-content/uploads/2023/12/fls-logo-tagline-blue.png"
                                                                                    style="display: block; height: auto; border: 0; width: 100%;"
                                                                                    title="Yourlogo" width="180" /></a>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                </table>
                                                                <div class="spacer_block block-2"
                                                                    style="height:40px;line-height:40px;font-size:1px;"> </div>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-2"
                                    role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="600">
                                    <tbody>
                                        <tr class="anchor-content">
                                            <td>
                                                <table align="center" border="0" cellpadding="0" cellspacing="0"
                                                    class="row-content nav" role="presentation"
                                                    style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-radius: 0; color: #000000; width: 100%; margin: 0 auto;"
                                                >
                                                    <tbody>
                                                        <tr>
                                                            <td class="column column-1 anchor-text"
                                                                style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left;  vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
                                                                width="18%">
                                                                <table border="0" cellpadding="0" cellspacing="0"
                                                                    class="image_block block-1" role="presentation"
                                                                    style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
                                                                    width="100%">
                                                                    <tr>
                                                                        <td class="pad"
                                                                            style="width:100%;padding-right:0px;padding-left:0px;">
                                                                            <div align="center" class="alignment"
                                                                                style="line-height:10px">
                                                                                <a href="https://fls-group.com/projects/"><img
                                                                                        alt="Project"
                                                                                        class="anchor-image"
                                                                                        src="http://fls.saigondigitaldev.com/wp-content/uploads/2023/12/Text-Project.png"
                                                                                        style="display: block; height: auto; border: 0; width: 80%;"
                                                                                        title="I'm an image" width="40" /></a>
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                </table>
                                                            </td>
                                                            <td class="space"
                                                                style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left;  vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
                                                                width="18%">
                                                                <table border="0" cellpadding="0" cellspacing="0"
                                                                    class="image_block block-1" role="presentation"
                                                                    style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
                                                                    width="100%">
                                                                    <tr>
                                                                        <td class="pad"
                                                                            style="width:100%;padding-right:0px;padding-left:0px;">
                                                                            <div align="center" class="space"
                                                                                style="line-height:10px">
                                                                                
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                </table>
                                                            </td>
                                                            <td class="column column-1 anchor-text line"
                                                                style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
                                                                width="9%">
                                                                <table border="0" cellpadding="0" cellspacing="0"
                                                                    class="image_block block-1 mobile_hide" role="presentation"
                                                                    style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
                                                                    width="100%">
                                                                    <tr>
                                                                        <td class="pad"
                                                                            style="width:100%;padding-right:2px;padding-left:2px;">
                                                                            <div align="center" class="alignment"
                                                                                style="line-height:10px">
                                                                                <div><img
                                                                                        alt="separate line" src="http://fls.saigondigitaldev.com/wp-content/uploads/2023/12/Line.png"
                                                                                        style="display: block; height: auto; border: 0; width: 100%;"
                                                                                        title="I'm an image" width="35" /></div>
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                </table>
                                                            </td>
                                                            <td class="column column-1 anchor-text"
                                                                style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
                                                                width="18%">
                                                                <table border="0" cellpadding="0" cellspacing="0"
                                                                    class="image_block block-1" role="presentation"
                                                                    style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
                                                                    width="100%">
                                                                    <tr>
                                                                        <td class="pad"
                                                                            style="width:100%;padding-right:0px;padding-left:0px;">
                                                                            <div align="center" class="alignment"
                                                                                style="line-height:10px">
                                                                                <a href="https://fls-group.com/logistics/"><img
                                                                                        alt="Logistic"
                                                                                        class="anchor-image"
                                                                                        src="http://fls.saigondigitaldev.com/wp-content/uploads/2023/12/Text-Logistic.png"
                                                                                        style="display: block; height: auto; border: 0; width: 80%;"
                                                                                        title="I'm an image" width="40" /></a>
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                </table>
                                                            </td>
                                                            <td class="space"
                                                                style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left;  vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
                                                                width="18%">
                                                                <table border="0" cellpadding="0" cellspacing="0"
                                                                    class="image_block block-1" role="presentation"
                                                                    style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
                                                                    width="100%">
                                                                    <tr>
                                                                        <td class="pad"
                                                                            style="width:100%;padding-right:0px;padding-left:0px;">
                                                                            <div align="center" class="space"
                                                                                style="line-height:10px">
                                                                                
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                </table>
                                                            </td>
                                                            <td class="column column-1 anchor-text line"
                                                                style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
                                                                width="9%">
                                                                <table border="0" cellpadding="0" cellspacing="0"
                                                                    class="image_block block-1 mobile_hide" role="presentation"
                                                                    style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
                                                                    width="100%">
                                                                    <tr>
                                                                        <td class="pad"
                                                                            style="width:100%;padding-right:2px;padding-left:2px;">
                                                                            <div align="center" class="alignment"
                                                                                style="line-height:10px">
                                                                                <div><img
                                                                                        alt="Line" src="http://fls.saigondigitaldev.com/wp-content/uploads/2023/12/Line.png"
                                                                                        style="display: block; height: auto; border: 0; width: 100%;"
                                                                                        title="I'm an image" width="35" /></div>
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                </table>
                                                            </td>
                                                            <td class="column column-5 anchor-text warehousing"
                                                                style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
                                                                width="22%">
                                                                <table border="0" cellpadding="0" cellspacing="0"
                                                                    class="image_block block-1" role="presentation"
                                                                    style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
                                                                    width="100%">
                                                                    <tr>
                                                                        <td class="pad"
                                                                            style="width:100%;padding-right:0px;padding-left:0px;">
                                                                            <div align="center" class="alignment"
                                                                                style="line-height:10px">
                                                                                <a href="https://fls-group.com/warehousing/"><img
                                                                                        alt="Warehousing"
                                                                                        class="anchor-image"
                                                                                        src="https://fls.saigondigitaldev.com/wp-content/uploads/2024/02/warehousing.png"
                                                                                        style="display: block; height: auto; border: 0; width: 80%;"
                                                                                        title="I'm an image" width="40" /></a>
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                </table>
                                                            </td>
                                                            <td class="space"
                                                                style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left;  vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
                                                                width="18%">
                                                                <table border="0" cellpadding="0" cellspacing="0"
                                                                    class="image_block block-1" role="presentation"
                                                                    style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
                                                                    width="100%">
                                                                    <tr>
                                                                        <td class="pad"
                                                                            style="width:100%;padding-right:0px;padding-left:0px;">
                                                                            <div align="center" class="space"
                                                                                style="line-height:10px">
                                                                                
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                </table>
                                                            </td>
                                                            <td class="column column-6 line"
                                                                style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
                                                                width="9%">
                                                                <table border="0" cellpadding="0" cellspacing="0"
                                                                    class="image_block block-1 mobile_hide" role="presentation"
                                                                    style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
                                                                    width="100%">
                                                                    <tr>
                                                                        <td class="pad"
                                                                            style="width:100%;padding-right:2px;padding-left:2px;">
                                                                            <div align="center" class="alignment"
                                                                                style="line-height:10px">
                                                                                <div><img
                                                                                        alt="Line" src="http://fls.saigondigitaldev.com/wp-content/uploads/2023/12/Line.png"
                                                                                        style="display: block; height: auto; border: 0; width: 100%;"
                                                                                        title="I'm an image" width="35" /></div>
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                </table>
                                                            </td>
                                                            <td class="column column-7 anchor-text"
                                                                style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left;  vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
                                                                width="15%">
                                                                <table border="0" cellpadding="0" cellspacing="0"
                                                                    class="image_block block-1" role="presentation"
                                                                    style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
                                                                    width="100%">
                                                                    <tr>
                                                                        <td class="pad"
                                                                            style="width:100%;padding-right:0px;padding-left:0px;">
                                                                            <div align="center" class="alignment"
                                                                                style="line-height:10px">
                                                                                <a href="https://fls-group.com/trading/"><img
                                                                                        alt="Trading"
                                                                                        class="anchor-image"
                                                                                        src="http://fls.saigondigitaldev.com/wp-content/uploads/2023/12/Text-Trading.png"
                                                                                        style="display: block; height: auto; border: 0; width: 80%;"
                                                                                        title="I'm an image" width="40" /></a>
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                </table>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-3"
                                    role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-size: auto;"
                                    width="100%">
                                    <tbody>
                                        <tr>
                                            <td>
                                                <table align="center" border="0" cellpadding="0" cellspacing="0"
                                                    class="row-content stack" role="presentation"
                                                    style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-size: auto; color: #000000; width: 600px; margin: 0 auto;"
                                                    width="600">
                                                    <tbody>
                                                        <tr>
                                                            <td class="column column-1"
                                                                style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
                                                                width="100%">
                                                                <div class="spacer_block block-1"
                                                                    style="height:60px;line-height:60px;font-size:1px;"> </div>
                                                                <table border="0" cellpadding="0" cellspacing="0"
                                                                    class="image_block block-2" role="presentation"
                                                                    style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
                                                                    width="100%">
                                                                    <tr>
                                                                        <td class="pad"
                                                                            style="width:100%;padding-right:0px;padding-left:0px;">
                                                                            <div align="center" class="alignment"
                                                                                style="line-height:10px">
                                                                                <div class="fullWidth" style="max-width: 600px;">
                                                                                    <img alt="I'm an image" src="http://fls.saigondigitaldev.com/wp-content/uploads/2023/12/admin-ajax.png"
                                                                                        style="display: block; height: auto; border: 0; width: 100%;"
                                                                                        title="I'm an image" /></div>
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                </table>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-4"
                                    role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 10pt;" width="100%">
                                    <tbody>
                                        <tr>
                                            <td>
                                                <table align="center" border="0" cellpadding="0" cellspacing="0"
                                                    class="row-content stack" role="presentation"
                                                    style="mso-table-lspace: 0pt; mso-table-rspace: 10pt; color: #000000; width: 600px; margin: 0 auto;"
                                                    width="600">
                                                    <tbody>
                                                        <tr>
                                                            <td class="column column-1"
                                                                style="mso-table-lspace: 0pt; mso-table-rspace: 10pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
                                                                width="100%">
                                                                <div class="spacer_block block-1"
                                                                    style="height:40px;line-height:40px;font-size:1px;"> </div>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-5"
                                    role="presentation" style="mso-table-lspace: 10pt; mso-table-rspace: 10pt; background-size: auto;"
                                    width="100%">
                                    <tbody>
                                        <tr>
                                            <td>
                                                <table align="center" border="0" cellpadding="0" cellspacing="0"
                                                    class="row-content stack email-content" role="presentation"
                                                    style="mso-table-lspace: 10pt; mso-table-rspace: 10pt; border-radius: 0; color: #000000; margin: 0 auto;"
                                                    width="600">
                                                    <tbody>
                                                        <tr>
                                                            <td class="column column-1"
                                                                style="mso-table-lspace: 10pt; mso-table-rspace: 10pt; font-weight: 400; text-align: left; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
                                                                width="100%">
                                                                <table border="0" cellpadding="0" cellspacing="0"
                                                                    class="paragraph_block block-1" role="presentation"
                                                                    style="mso-table-lspace: 10pt; mso-table-rspace: 10pt; word-break: break-word"
                                                                    width="100%">
                                                                    <tr>
                                                                        <td class="pad letter letter-wrapper"
                                                                            style="width: 100%; padding-bottom:30px;padding-left:80px;padding-right:80px;padding-top:30px; background-repeat: no-repeat; background-size: 100% 100%; background-image: url(http://fls.saigondigitaldev.com/wp-content/uploads/2023/12/BG-Email-Content.jpg)">
                                                                            <div
                                                                                style="font-family:Verdana, Geneva, sans-serif;font-size:15px;line-height:130%;text-align:left;mso-line-height-alt:24px;">
                                                                                <p class="email-text" style="margin: 0; word-break: break-word;"> </p>
                                                                                <p class="email-text" style="margin: 0; word-break: break-word;"> </p>
                                                                                <p class="email-text" style="margin: 0; word-break: break-word; margin-bottom: 30px">Dear
                                                                                    ${name},</p>
                                                                                <p class="email-text" style="margin: 0; word-break: break-word;"> </p>
                                                                                <p class="email-text" style="margin: 0; word-break: break-word; margin-bottom: 30px">Thank
                                                                                    you for subscribing to our newsletter and
                                                                                    joining our community. Our subscription aligns
                                                                                    you with a network of global enthusiasts and
                                                                                    world movers.</p>
                                                                                <p class="email-text" style="margin: 0; word-break: break-word;"> </p>
                                                                                <p class="email-text" style="margin: 0; word-break: break-word; margin-bottom: 30px">Within
                                                                                    our newsletter, you will discover the latest
                                                                                    updates and insights from the dynamic logistics
                                                                                    realm. Stay informed, stay inspired, and be a
                                                                                    positive force in this ever-evolving landscape.
                                                                                </p>
                                                                                <p class="email-text" style="margin: 0; word-break: break-word;"> </p>
                                                                                <p class="email-text" style="margin: 0; word-break: break-word; margin-bottom: 30px">
                                                                                    Together, let's keep the world moving.</p>
                                                                                <p class="email-text" style="margin: 0; word-break: break-word;"> </p>
                                                                                <p class="email-text" style="margin: 0; word-break: break-word; margin-bottom: 30px">Best
                                                                                    regards,</p>
                                                                                <p class="email-text" style="margin: 0; word-break: break-word;"> </p>
                                                                                <p class="email-text" style="margin: 0; word-break: break-word;">FLS
                                                                                    Group</p>
                                                                                <p class="email-text" style="margin: 0; word-break: break-word;"> </p>
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                </table>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-6"
                                    role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
                                    <tbody>
                                        <tr>
                                            <td>
                                                <table align="center" border="0" cellpadding="0" cellspacing="0"
                                                    class="row-content stack" role="presentation"
                                                    style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 600px; margin: 0 auto;"
                                                    width="600">
                                                    <tbody>
                                                        <tr>
                                                            <td class="column column-1"
                                                                style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
                                                                width="100%">
                                                                <div class="spacer_block block-1"
                                                                    style="height:120px;line-height:120px;font-size:1px;"> </div>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-12 footer-content"
                                    role="presentation"
                                    style="width: 100% !important; text-align: center; mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-image: url('http://fls.saigondigitaldev.com/wp-content/uploads/2023/12/BG-Bottom-1.jpg'); background-repeat: no-repeat; background-size: cover;"
                                    width="100%">
                                    <tbody>
                                        <tr>
                                            <td>
                                                <table align="center" border="0" cellpadding="0" cellspacing="0"
                                                    class="row-content stack" role="presentation"
                                                    style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-size: auto; border-bottom: 0 solid #46b767; border-left: 0 solid #46b767; border-right: 0px solid #46b767; border-top: 0 solid #46b767; color: #000000; margin: 0 auto;">
                                                    <tbody style="margin: 0 auto">
                                                        <tr>
                                                            <td class="column"
                                                                style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 15px; padding-left: 10px; padding-right: 10px; padding-top: 25px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px; width: 100% !important"
                                                                width="100%">
                                                                <table border="0" cellpadding="0" cellspacing="0"
                                                                    class="" role="presentation"
                                                                    style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; margin: 0 auto;"
                                                                    width="100%">
                                                                    <tr>
                                                                        <td class="pad"
                                                                            style="padding-bottom:10px;padding-top:10px;width:100%;padding-right:0px;padding-left:0px; margin: 0 auto">
                                                                            <div align="center" class="alignment"
                                                                                style="line-height:10px">
                                                                                <div style="width: 116px; margin: 0 auto;"><a href="https://fls-group.com/contact/"><img
                                                                                        src="http://fls.saigondigitaldev.com/wp-content/uploads/2023/12/Text-Followus.png"
                                                                                        style="display: inline-block; height: auto; border: 0; width: 100%; margin: 0 auto"
                                                                                        width="116" /></a></div>
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                </table>
                                                                <table border="0" cellpadding="0" cellspacing="0"
                                                                    class="social_block block-2" role="presentation"
                                                                    style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; margin: 0 auto"
                                                                    width="100%">
                                                                    <tr>
                                                                        <td class="pad"
                                                                            style="text-align:center;padding-right:0px;padding-left:0px; margin: 0 auto">
                                                                            <div align="center" class="alignment">
                                                                                <table border="0" cellpadding="0" cellspacing="0"
                                                                                    class="social-table" role="presentation"
                                                                                    style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; display: inline-block; background-color: #46b767; padding: 10px 5px; border-radius: 12px; margin: 0 auto"
                                                                                    width="">
                                                                                    <tr>
                                                                                        <td style="padding:0 10px 0 10px;"><a
                                                                                                href="https://www.youtube.com/c/FLSGroup"
                                                                                                target="_blank"><img alt="YouTube"
                                                                                                    height="26"
                                                                                                    src="http://fls.saigondigitaldev.com/wp-content/uploads/2023/12/Logo-Youtube.png"
                                                                                                    style="display: block; width: auto; border: 0;"
                                                                                                    title="YouTube"/></a></td>
                                                                                        <td style="padding:0 10px 0 10px;"><a
                                                                                                href="https://www.linkedin.com/company/flsgroup/"
                                                                                                target="_blank"><img alt="Linkedin"
                                                                                                height="26"
                                                                                                    src="http://fls.saigondigitaldev.com/wp-content/uploads/2023/12/Logo-In.png"
                                                                                                    style="display: block; width: auto; border: 0;"
                                                                                                    title="linkedin"/></a></td>
                                                                                        <td style="padding:0 10px 0 10px;"><a
                                                                                                href="https://www.facebook.com/FLSGroup1993"
                                                                                                target="_blank"><img alt="Facebook"
                                                                                                height="26"
                                                                                                    src="http://fls.saigondigitaldev.com/wp-content/uploads/2023/12/Logo-FB.png"
                                                                                                    style="display: block; width: auto; border: 0;"
                                                                                                    title="facebook"/></a></td>
                                                                                    </tr>
                                                                                </table>
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                </table>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                
                            </td>
                        </tr>
                    </tbody>
                </table><!-- End -->
            </body>

            </html>
    `
}
