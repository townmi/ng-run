import {Component, OnInit} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map'
import {Observable} from 'rxjs/Rx';

@Component({
  selector: 'app-page-video-play',
  templateUrl: './page-video-play.component.html',
  styleUrls: ['./page-video-play.component.scss']
})

export class PageVideoPlayComponent implements OnInit {

  videoStatus = false;
  timer = null;

  progress = {
    "width": "0%"
  };

  constructor(private http: Http) {
    // http.get('https://openapip.vipabc.com/VMD/OfficalWebAPI/LPIdeoAPI/ShowSubject?seriesKey=a6811af2-e830-4fef-929e-5ef8b548e5ca&_=1487648364303').map(res => res.json())
    // .subscribe(function (e) {
    // });
  }

  ngOnInit() {
    let self = this;

    let video = <HTMLVideoElement>document.getElementById('video');

    video.addEventListener('play', function () {

    });

    video.addEventListener('progress', function (e) {
      let len = video.duration;
      self.timer = setInterval(function () {
        let currentTime = video.currentTime;
        let pec = currentTime / len * 100;
        self.currentProgress(pec);
        if (len <= currentTime) {
          clearInterval(self.timer);
        }
      }, 60)
    });
    let mimeCodec = 'video/mp4; codecs="avc1.42E01E, mp4a.40.2"';

    if ('MediaSource' in window && MediaSource.isTypeSupported(mimeCodec)) {
      let mediaSource = new MediaSource();
      video.src = URL.createObjectURL(mediaSource);

      mediaSource.addEventListener('sourceopen', function () {
        let mediaSource = this;
        let sourceBuffer = mediaSource.addSourceBuffer(mimeCodec);

        getPipe('/assets/demo.mp4').subscribe(videoBite => {
          sourceBuffer.addEventListener('updateend', function (_) {
            mediaSource.endOfStream();
            video.play();
            self.videoStatus = true;
          });

          sourceBuffer.appendBuffer(videoBite);
        });
      });
    } else {
      console.error('Unsupported MIME type or codec: ', mimeCodec);
    }

  }

  videoTogglePlay() {
    let video = <HTMLVideoElement>document.getElementById('video');


    if (this.videoStatus || video.currentTime === video.duration) {
      video.pause()
    } else {
      video.play()
    }
    this.videoStatus = !this.videoStatus;

  }
  currentProgress (pec = 0) {
    this.progress = {
      "width": pec + "%"
    }
  }

  setNewCurrent(event) {
    console.log(event)
  }
}

let getPipe = function (url: string) {
  return Observable.create(observer => {
    let xhr = new XMLHttpRequest();
    xhr.open('get', url);
    xhr.responseType = 'arraybuffer';
    xhr.onreadystatechange = function () {
      if (xhr.readyState == 4 && xhr.status == 200) {
        observer.next(xhr.response);
        observer.complete();
      }
    };
    xhr.send();
  });
};
