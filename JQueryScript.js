$(document).ready(function() {
    $('#calculatorForm').on('submit', function(event) {
        event.preventDefault();
        
        var num1 = parseFloat($('#num1').val());
        var num2 = parseFloat($('#num2').val());
        var operation = $('#operation').val();
        var result = 0;
        
        if (isNaN(num1) || isNaN(num2)) {
            $('#result').text('Por favor, ingresa números válidos.');
            return;
        }

        switch (operation) {
            case 'sumar':
                result = num1 + num2;
                break;
            case 'restar':
                result = num1 - num2;
                break;
            case 'multiplicar':
                result = num1 * num2;
                break;
            case 'dividir':
                if (num2 !== 0) {
                    result = num1 / num2;
                } else {
                    result = 'Error: División por cero';
                }
                break;
            default:
                result = 'Operación no válida';
        }

        // Mostrar el resultado en pantalla
        $('#result').text(result);
    });
});