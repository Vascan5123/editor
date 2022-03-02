import app from 'flarum/common/app';
import { extend, override } from 'flarum/extend';
import DiscussionPage from 'flarum/components/DiscussionPage';


export default function () {

    extend(DiscussionPage.prototype, 'view', function (items) {

        /* const vasiaSettings = JSON.parse(app.forum.attribute('block-cat.vasiaSettings'));
        if (vasiaSettings.display_pdf_files) { */
            let span_pdf = document.getElementsByClassName("span_pdf");
            if (span_pdf != undefined) {
                for (let i = 0; i < span_pdf.length; i++) {
                    span_pdf[i].classList.add("d-none");
                }
            }
            let iframe_pdf = document.getElementsByClassName("iframe_pdf");
            if (iframe_pdf.length > 0) {
                for (let i = 0; i < iframe_pdf.length; i++) {
                    for (let j = 0; j < iframe_pdf[i].attributes.length; j++) {
                        let text = iframe_pdf[i].innerHTML;

                        var from = text.search('<a href="');
                        from += 9;
                        var to = text.length;
                        var new_text = text.substring(from, to);

                        var from2 = 0;
                        var to2 = new_text.search('.pdf');
                        to2 += 4;
                        var new_text2 = new_text.substring(from2, to2);

                        if (iframe_pdf[i].attributes[j].name == "src") {
                            if (iframe_pdf[i].attributes[j].value == "")
                                iframe_pdf[i].attributes[j].value = new_text2;
                        }
                    }
                }
            }
        /* } else {
            let iframe_pdf = document.getElementsByClassName("iframe_pdf");
            if (iframe_pdf != undefined) {
                for (let i = 0; i < iframe_pdf.length; i++) {
                    iframe_pdf[i].classList.add("d-none");
                }
            }
        } */
    });

}