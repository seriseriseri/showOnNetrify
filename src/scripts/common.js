import { ModalProgrammatic as Modal } from 'buefy'

export default {
  showDialog: function (component, props) {
    let _resolve;
    Modal.open({
      component: component,
      props: { arg: props },
      hasModalCard: true,
      canCancel: false,
      trapFocus: true,
      events: {
        close(v) {
          _resolve(v);
        }
      }
    });
    return new Promise(resolve => {
      _resolve = resolve;
    });
  }
}
