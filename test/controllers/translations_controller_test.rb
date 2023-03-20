require "test_helper"

class TranslationsControllerTest < ActionDispatch::IntegrationTest
  test "should get create" do
    get translations_create_url
    assert_response :success
  end

  test "should get edit" do
    get translations_edit_url
    assert_response :success
  end

  test "should get update" do
    get translations_update_url
    assert_response :success
  end

  test "should get destroy" do
    get translations_destroy_url
    assert_response :success
  end

  test "should get home" do
    get translations_home_url
    assert_response :success
  end
end
