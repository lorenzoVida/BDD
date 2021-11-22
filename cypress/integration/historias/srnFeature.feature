Feature: compra de varios certificados pagando con PSE y compra de un certificado con Card, Cash y Transfer

compra de certificados en SNR 

    Scenario: compra de varios certificados con PSE
    Given abrir la website de snr
    When agrego varios certificados para su consulta
    And ingreso los datos del medio de pago
    And ingreso los datos de facturacion
    And validar informacion de la transaccion a pagar
    And validar informacion del resumen de la compra
    Then descargar certificados comprados
