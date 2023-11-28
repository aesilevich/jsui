
class CounterWidget {
    constructor(counterId, buttonId) {
        this.#counterText_ = new Text(counterId)

        var button = new Button(buttonId)
        button.setOnClick(function() {
            var x = parseInt(this.#counterText_.text())
            this.#counterText_.setText((x + 1).toString())
        }.bind(this))
    }

    #counterText_
}


new CounterWidget("my_counter", "my_button")
