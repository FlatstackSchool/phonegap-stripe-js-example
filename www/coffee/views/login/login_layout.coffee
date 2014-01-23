define ['backbone'], (Backbone) ->

  class LoginLayoutView extends Backbone.View
    initialize: ->

    renderLogin: ->
      # Stripe.setPublishableKey('pk_test_qGcr7h7LLs48Begklh2w4BhH')

      # $('#payment-form').submit (event) ->
      #   console.log 'form clicked'
      #   $form = $(this)
      #   $form.find('button').prop('disabled', true)
      #   Stripe.card.createToken($form, stripeResponseHandler)
      #   return false

      # stripeResponseHandler = (status, response) ->
      #   console.log 'test'
      #   $form = $('#payment-form')
      #   console.log status, response

      #   if (response.error)
      #     $form.find('.payment-errors').text(response.error.message)
      #     $form.find('button').prop('disabled', false)
      #   else
      #     token = response.id;
      #     $form.append($('<input type="hidden" name="stripeToken" />').val(token))
      #     $form.get(0).submit()
