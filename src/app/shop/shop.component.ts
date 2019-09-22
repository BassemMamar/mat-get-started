import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {
  shopItems: ShopItem[] = [
    {
      // tslint:disable-next-line:max-line-length
      src: 'https://firebasestorage.googleapis.com/v0/b/firstorder-io.appspot.com/o/assets%2Fcomponents%2Fsprintzerotoapp.svg?alt=media&token=19fa5c2b-c97c-4840-83a6-5fff4e2684c5',
      price: 'EUR 1',
      title: 'Sprint from Zero to App'
    },
    {
      // tslint:disable-next-line:max-line-length
      src: 'https://firebasestorage.googleapis.com/v0/b/firstorder-io.appspot.com/o/assets%2Fcomponents%2Ffastandconsistent.svg?alt=media&token=f5b60de1-45b3-48aa-97bc-0fdf397bbf11',
      price: 'EUR 300',
      title: ' Angular Universal '
    },
    {
      // tslint:disable-next-line:max-line-length
      src: 'https://firebasestorage.googleapis.com/v0/b/firstorder-io.appspot.com/o/assets%2Fcomponents%2Fversatile.svg?alt=media&token=495305f0-637a-41bf-953e-407ece627783',
      price: 'EUR 300',
      title: 'Theming '
    },
    {
      // tslint:disable-next-line:max-line-length
      src: 'https://firebasestorage.googleapis.com/v0/b/firstorder-io.appspot.com/o/assets%2Fcomponents%2Foptimized.svg?alt=media&token=f988e297-2629-4363-951e-9f866d6b6e40',
      price: 'EUR 99',
      title: ' Hire an expert by the hour  '
    },
    {
      // tslint:disable-next-line:max-line-length
      src: 'https://firebasestorage.googleapis.com/v0/b/firstorder-io.appspot.com/o/assets%2Fcomponents%2Fautocomplete.svg?alt=media&token=75b89f03-2377-4d0f-a879-3002cf937b1b',
      price: 'EUR 500',
      title: '  Autocomplete '
    },
    {
      // tslint:disable-next-line:max-line-length
      src: 'https://firebasestorage.googleapis.com/v0/b/firstorder-io.appspot.com/o/assets%2Fcomponents%2Fbutton-toggle.svg?alt=media&token=da8f4756-012a-47c0-acc1-4046602dc592',
      price: 'EUR 200',
      title: ' Button Toggle '
    },
    {
      // tslint:disable-next-line:max-line-length
      src: 'https://firebasestorage.googleapis.com/v0/b/firstorder-io.appspot.com/o/assets%2Fcomponents%2Fbutton.svg?alt=media&token=11a2cffa-68a4-4923-8d7b-0f679b16383f',
      price: 'EUR 300',
      title: ' Button '
    },
    {
      // tslint:disable-next-line:max-line-length
      src: 'https://firebasestorage.googleapis.com/v0/b/firstorder-io.appspot.com/o/assets%2Fcomponents%2Fbuttons.svg?alt=media&token=577bc7d2-f724-4136-9560-c6ca3ff1a5e4',
      price: 'EUR 200',
      title: ' Buttons '
    },
    {
      // tslint:disable-next-line:max-line-length
      src: 'https://firebasestorage.googleapis.com/v0/b/firstorder-io.appspot.com/o/assets%2Fcomponents%2Fcard.svg?alt=media&token=e6eb692b-dac0-4ec1-9bfa-86bbeef3f065',
      price: 'EUR 500',
      title: ' Card '
    },
    {
      // tslint:disable-next-line:max-line-length
      src: 'https://firebasestorage.googleapis.com/v0/b/firstorder-io.appspot.com/o/assets%2Fcomponents%2Fcheckbox.svg?alt=media&token=26a74424-1464-42dd-8079-a1c2dcaf9ee7',
      price: 'EUR 500',
      title: ' Checkbox '
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}

export interface ShopItem {
  src: string;
  title: string;
  price: string;
}
