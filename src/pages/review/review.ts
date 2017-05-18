import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { ReviewsProvider } from '../../providers/reviews/reviews';
import { AddReviewPage } from '../add-review/add-review'

/**
 * Generated class for the ReviewPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-review',
  templateUrl: 'review.html',
})
export class ReviewPage {
  reviews: any;
  criteria: any;
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private reviewsProvider: ReviewsProvider,
    private modalCtrl: ModalController) {
  }
  ionViewWillEnter() {
    this.fetchData()
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ReviewPage');
  }
  fetchData() {
    this.reviewsProvider.getReviews().then((data) => {
      this.reviews = data;
    });
  }
  addReview() {
    let modal = this.modalCtrl.create(AddReviewPage);
    modal.onDidDismiss(review => {
      if (review) {
        this.reviewsProvider.createReview(review).subscribe((data) => {
          this.reviews = data;
        });
      }
    });
    modal.present();
  }
  deleteReview(review) {

    //Remove locally
    let index = this.reviews.indexOf(review);

    if (index > -1) {
      this.reviews.splice(index, 1);
    }

    //Remove from database
    this.reviewsProvider.deleteReview(review._id);
  }
  searchReviews() {
    console.log(this.criteria)
    if (this.criteria !== '' && this.criteria !== undefined) {
      this.reviews = this.reviews.filter((r) =>
        r.title.toLowerCase().indexOf(this.criteria.toLowerCase()) > -1 ||
        r.description.toLowerCase().indexOf(this.criteria.toLowerCase()) > -1);
    } else {
      this.fetchData();
    }
  }
}
