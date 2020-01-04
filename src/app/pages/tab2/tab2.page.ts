import { Component, ViewChild, OnInit } from '@angular/core';
import { IonSegment } from '@ionic/angular';
import { NewsService } from 'src/app/services/news.service';
import { Article } from 'src/app/models/models';

@Component({
    selector: 'app-tab2',
    templateUrl: 'tab2.page.html',
    styleUrls: ['tab2.page.scss'],
})
export class Tab2Page implements OnInit {
    @ViewChild(IonSegment, { static: true }) segment: IonSegment;

    categories = [
        'business',
        'entertainment',
        'general',
        'health',
        'science',
        'sports',
        'technology',
    ];
    news: Article[] = [];

    constructor(private newSrv: NewsService) {}

    ngOnInit() {
        this.loadNews(this.categories[0]);
    }

    changeCategory(ev) {
        this.news = [];
        this.loadNews(ev.detail.value);
    }

    loadNews(category: string, ev?) {
        this.newSrv.getTopHeadLinesCategory(category).subscribe(resp => {
            console.log(resp);
            this.news.push(...resp.articles);
            if (ev) {
                ev.target.complete();
            }
        });
    }

    loadData(ev) {
        this.loadNews(this.segment.value, ev);
    }
}
