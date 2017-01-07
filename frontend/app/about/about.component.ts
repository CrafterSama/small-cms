import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    moduleId: module.id,
    templateUrl: 'about.component.html'
})

export class AboutComponent implements OnInit {

	lat: number = 51.678418;
	lng: number = 7.809007;

	title: string = 'Acerca de';
	content: string = '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus accumsan ipsum nisl, at accumsan nisl placerat non. Mauris porttitor convallis pharetra. Sed commodo malesuada dolor ac interdum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc interdum nulla auctor nulla volutpat, vitae fringilla velit blandit. Maecenas est quam, imperdiet in diam non, rutrum tempus sem. Cras volutpat mi vitae malesuada pulvinar. Nulla placerat mauris nec rutrum aliquet. Nunc vulputate, elit non pretium consectetur, ligula justo egestas ex, vel scelerisque erat nisl at libero. Etiam quis ultricies ante. Sed lorem justo, tristique et egestas in, imperdiet eu leo. In urna purus, dapibus ut bibendum in, cursus eget justo. Vestibulum sit amet ante congue, venenatis velit in, suscipit nibh. Pellentesque sodales nunc purus, sit amet varius lacus placerat vel. Curabitur suscipit nunc nec elit finibus, nec vulputate risus elementum.</p><p>Integer sed ante iaculis, hendrerit lacus sit amet, porta nisl. Vivamus aliquet dolor a nibh efficitur aliquet. Donec ac risus sagittis, porta sem in, lacinia nunc. Maecenas eget risus rutrum, porta nunc eget, consequat ex. Nam eu efficitur tortor. Nam at hendrerit ante. Integer hendrerit felis tortor, sed luctus purus tempor vel. Cras scelerisque dolor in urna tempus posuere. Phasellus id vestibulum purus, luctus rhoncus ante.</p>';

	ngOnInit() {

    }

}