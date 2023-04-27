function addInlineStylesFromCSS(element) {
	const sheets = document.styleSheets;
	let inlineStyles = '';

	// Iterate over all the stylesheets
	for (let i = 0; i < sheets.length; i++) {
		try {
			const rules = sheets[i].cssRules || sheets[i].rules;

			// Iterate over all the rules in the current stylesheet
			for (let j = 0; j < rules.length; j++) {
				const rule = rules[j];

				// Check if the current rule applies to the element
				if (element.matches(rule.selectorText)) {
					const style = rule.style;

					// Iterate over all the properties in the current rule
					for (let k = 0; k < style.length; k++) {
						const propertyName = style[k];
						const propertyValue = style.getPropertyValue(propertyName);

						// Add the property and its value to the inline styles string
						inlineStyles += `${propertyName}: ${propertyValue}; `;
					}
				}
			}
		} catch (error) {
			// Ignore inaccessible rules and continue to the next stylesheet
			if (error instanceof DOMException) {
				console.warn(`Could not read rules from stylesheet: ${sheets[i].href}`);
				continue;
			} else {
				throw error;
			}
		}
	}

	// Add the generated inline styles to the element's style attribute
	element.setAttribute('style', inlineStyles);
}

// Example usage
const targetElement = document.querySelector('#some-element');
addInlineStylesFromCSS(targetElement);

