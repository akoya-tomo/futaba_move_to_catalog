## futaba move to catalog
����Userscript�͂ӂ��΁������˂�ŃX���ƃJ�^���O���_�u���N���b�N�ňړ��ł���悤�ɂ�����̂ł��B  

Firefox�̏ꍇ�A[Tampermonkey](https://addons.mozilla.org/ja/firefox/addon/tampermonkey/)���ɃC���X�[�����Ă���X�N���v�g���C���X�g�[�����ĉ������B  
�iGreasemonkey��Violentmonkey�ł̓���͖��m�F�ł��j  
Chrome�̏ꍇ�A[Tampermonkey](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)���ɃC���X�[�����Ă���X�N���v�g���C���X�g�[�����ĉ������B  

�����̂�Userscript��Firefox�A�h�I��[Duplicate Tabs Closer](https://addons.mozilla.org/ja/firefox/addon/duplicate-tabs-closer/)�E[move to an already opened tab](https://addons.mozilla.org/ja/firefox/addon/move-to-an-already-opened-tab/)�E[move to an already opened tab kai](https://github.com/akoya-tomo/move_to_an_already_opened_tab_kai/)��Chrome�A�h�I��[No Dupe Tabs](https://chrome.google.com/webstore/detail/no-dupe-tabs/fajkhkmabkgflclnlmfdafpikejjncca/)�Ȃǂ̏d�������^�u����Ċ��ɊJ���Ă���^�u�ֈړ�����A�h�I�����K�v�ł��B  
������Userscript��Firefox�A�h�I��[KOSHIAN](https://addons.mozilla.org/ja/firefox/user/anonymous-a0bba9187b568f98732d22d51c5955a6/)�̉��ϔł�[������](https://github.com/akoya-tomo/futaba_auto_reloader_K/wiki)�̈ꗗ����ǂ����B  

## �g����
* �ӂ��΂̃X����ʂŔw�i���_�u���N���b�N����Ƃ��̃X���̔̃J�^���O�Ɉړ����܂��B  
* �J�^���O��ʂŔw�i���_�u���N���b�N����ƁA�Ō�Ƀ_�u���N���b�N�ŃJ�^���O�Ɉړ������X���Ɉړ����܂��B  

## �C���X�g�[��

[GreasyFork](https://greasyfork.org/ja/scripts/36988-futaba-move-to-catalog)�@[GitHub](https://github.com/akoya-tomo/futaba_move_to_catalog/raw/master/futaba_move_to_catalog.user.js)  

## �ݒ�
�@�\�̓���̓X�N���v�g�`���̑啶���ϐ����G�f�B�^�ŕҏW����ΕύX���邱�Ƃ��ł��܂��B  

* LEFT\_BUTTON\_ONLY :�}�E�X���{�^���̂݃_�u���N���b�N�ړ��L��  
  - ���̃}�E�X�{�^���ł̃_�u���N���b�N�݂̂��ړ��L���ƂȂ�܂��Bfalse�ɂ���ƉE�̃}�E�X�{�^���ł��_�u���N���b�N�ňړ��ł��܂��B
* ENABLE\_EXCLUSION:�_�u���N���b�N���菜�O�@�\�L��  
  - �_�u���N���b�N�����ꏊ�𔻕ʂ��Ĉړ��𖳌��ɂ���@�\��L���ɂ��܂��B�i��ɑ��삷�镔�����ړ������ɂ��Ă��܂��j  
    false�ɐݒ肷��ƁA�ǂ����_�u���N���b�N���Ă��ړ����܂��B  
  - ���̍��ڂ̉��ɂ͌ʂ̏��O���ڂ�����ł��܂��B�e���ڂ�true�ɐݒ肷��Ƃ��̍��ڂ̗̈�Ń_�u���N���b�N���Ă��ړ����܂���B  
  - TAG\_BLOCKQUOTE�̓��X�{�����Ώۂł��Btrue�ɐݒ肷��ƃ��X�{�����_�u���N���b�N�őI�����ł��܂��B����͈͂���������E���ɒ����̂ŁA�_�u���N���b�N�ɂ�镶����I�������Ȃ��̂ł����false�ɐݒ肷�邱�ƂŁA�C�t�����Ɉړ��ł��Ȃ����Ƃ�h���܂��B  
  - �ӂ��N���ȊO�̊��ł̓��XNo.��I�����悤�ƃ_�u���N���b�N����ƃJ�^���O�Ɉړ����Ă��܂��܂��B���������������Ƃ���CLASS\_RTD��true�ɂ���ƃ��X�̔w�i�F�̕t�����̈�S�̂��ړ������ƂȂ�܂��B  

## ���ӎ���
* �K��**�d�������^�u����Ċ��ɊJ���Ă���^�u�Ɉړ�����A�h�I��**�𕹗p���Ă��������B  
* �ړ���̃J�^���O��X�������ɕ����Ă����ꍇ�͐V���Ƀ^�u���J���܂��B  
* ���菜�O�@�\�͈�ł���������v����ƗL���ɂȂ�܂��B�Ⴆ�΃��X\(CLASS\_RTD\)�����O�L���ɂ���ƁA���X�{��\(TAG\_BLOCKQUOTE\)�����O�����ɂ��Ă��Ă��A���X�{�������X�̗̈���̂��߈ړ������ɂȂ�܂��B  
* Firefox�A�h�I��Duplicate Tabs Closer�g�p���͈ȉ��̐ݒ�ɂ��Ă��������B  
  - On duplicate tab detected : Close tab automatically  
  - On remaining tab : Activate  
  - Priority : Keep older tab  
  - Compare with tab title �̃`�F�b�N���O���i�^�u�^�C�g����ύX���Ă���Ƃ��j  

## ���m�̖��
* Duplicate Tabs Closer 3.1.4�Ŏc�����^�u��active�ɂȂ�Ȃ����Ƃ�����܂��B  
  �s������������ꍇ��Duplicate Tabs Closer��3.1.2�Ƀ_�E���O���[�h���Ă��������B  

## �X�V����
* v1.0.2 2018-02-07
  - �_�u���N���b�N���菜�O���ڂ�futaba thread highlighter���j���[��futaba catalog NG��ǉ�  
* v1.0.1 2018-01-04
  - �_�u���N���b�N���菜�O�̔���^�C�~���O�s��C��  
  - �_�u���N���b�N���菜�O���ڒǉ�  
* v1.0.0 2018-01-03
  - ���񃊃��[�X  

