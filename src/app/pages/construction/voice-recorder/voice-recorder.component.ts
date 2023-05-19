import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-voice-recorder',
  templateUrl: './voice-recorder.component.html',
  styleUrls: ['./voice-recorder.component.scss'],
})
export class VoiceRecorderComponent implements OnInit, AfterViewInit {
  recorder: any;
  isRecording: boolean = false;
  audioUrl: string = '';

  // blobFile!: any;
  // sendObj = {
  //   audio: this.blobFile,
  // };
  // audioContext = new AudioContext({ sampleRate: 16000 });

  @ViewChild('player') player?: ElementRef;

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    // console.log(this.player?.nativeElement);
  }

  recordAudio = () => {
    return new Promise((resolve) => {
      navigator.mediaDevices.getUserMedia({ audio: true }).then((stream) => {
        const mediaRecorder = new MediaRecorder(stream, {
          mimeType: 'audio/webm',
          audioBitsPerSecond: 16000,
        });
        const audioChunks: any[] = [];

        mediaRecorder.addEventListener('dataavailable', (event) => {
          audioChunks.push(event.data);
        });

        const start = () => {
          this.isRecording = true;
          mediaRecorder.start();
        };

        const stop = () => {
          this.isRecording = false;
          return new Promise((resolve) => {
            mediaRecorder.addEventListener('stop', () => {
              const audioBlob = new Blob(audioChunks, {
                type: 'audio/wav; codecs=MS_PCM',
              });
              // const reader = new FileReader();
              // reader.readAsDataURL(audioBlob);
              // reader.addEventListener(
              //   'load',
              //   () => {
              //     const base64data = reader.result;
              //     this.sendObj.audio = base64data;
              //     // this.http.post('apiUrl', this.sendObj, httpOptions).subscribe(data => console.log(data));
              //   },
              //   false
              // );
              const audioUrl = URL.createObjectURL(audioBlob);
              resolve({ audioBlob, audioUrl });
            });
            mediaRecorder.stop();
          });
        };
        resolve({ start, stop });
      });
    });
  };

  async record() {
    if (!this.isRecording) {
      this.recorder = await this.recordAudio();
      this.recorder.start();
    } else {
      await this.recorder
        .stop()
        .then((res: any) => {
          console.log(res);
          this.audioUrl = res.audioUrl;
          this.player?.nativeElement.setAttribute('src', res.audioUrl);
        })
        .catch((err: any) => {});
    }
  }
}
