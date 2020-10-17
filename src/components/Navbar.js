import React, { Component } from 'react'
import '../style/Navbar.css';

export default class Navbar extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li><a href="^#">Elektronik</a></li>
                    <li><a href="^#">Giyim</a></li>
                    <li><a href="^#">Çocuk</a></li>
                    <li><a href="^#">Erkek</a></li>
                    <li><a href="^#">Kadın</a></li>
                    <li><a href="^#">Bilgisayar</a></li>
                    <li><a href="^#">Klavye</a></li>
                    <li><a href="^#">Hayvan</a></li>

                    <input id="search-bar" placeholder="Binlerce ürünü arayabilirsiniz..  "/>
                </ul>
            </div>
        )
    }
}
