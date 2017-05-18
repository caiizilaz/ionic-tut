import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { ReviewsProvider } from '../../providers/reviews/reviews';


/**
 * Generated class for the AddReviewPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-add-review',
  templateUrl: 'add-review.html',
})
export class AddReviewPage {
  title: any;
  description: any;
  rating: any;
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private reviewsProvider: ReviewsProvider,
    public viewCtrl: ViewController) {
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad AddReviewPage');
  }
  save() {
    let review = {
      title: this.title,
      description: this.description,
      rating: this.rating
    };

    this.viewCtrl.dismiss(review);
  }
  close(): void {
    this.viewCtrl.dismiss();
  }
}
