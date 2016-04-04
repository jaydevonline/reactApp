var React = require('react');
var ReactDOM = require('react-dom');
var Accordion = require('./accordion');


module.exports = React.createClass({

    render : function(){
        return (
                <div className="accordian-container">
                    <section className="ac-container">
                        <div>
                            <input id="ac-1" name="accordion-1" type="checkbox" />
                            <label htmlFor='ac-1'>Dashboard</label>
                            <article className="ac-small">
                                <p>Lorem ipsum dolor sit amet, sit tincidunt inciderint ea. Erant noster habemus vix ex. Partiendo patrioque definiebas sit ad, pri hinc novum labore id</p>
                            </article>
                        </div>
                        <div>
                            <input id="ac-2" name="accordion-1" type="checkbox" />
                            <label htmlFor="ac-2">Team</label>
                            <article className="ac-medium">
                                <p>Lorem ipsum dolor sit amet, sit tincidunt inciderint ea. Erant noster habemus vix ex. Partiendo patrioque definiebas sit ad, pri hinc novum labore id</p>
                            </article>
                        </div>
                        <div>
                            <input id="ac-3" name="accordion-1" type="checkbox" />
                            <label htmlFor="ac-3">Pulse</label>
                            <article className="ac-large">
                                <p>Lorem ipsum dolor sit amet, sit tincidunt inciderint ea. Erant noster habemus vix ex. Partiendo patrioque definiebas sit ad, pri hinc novum labore id</p>
                            </article>
                        </div>
                        <div>
                            <input id="ac-4" name="accordion-1" type="checkbox" />
                            <label htmlFor="ac-4">Learn</label>
                            <article className="ac-large">
                                <p>Lorem ipsum dolor sit amet, sit tincidunt inciderint ea. Erant noster habemus vix ex. Partiendo patrioque definiebas sit ad, pri hinc novum labore id</p>
                            </article>
                        </div>
                    </section>
                </div>
            )
    }
})